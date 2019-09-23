import React, {useState} from 'react'
import {PortafolioContainer} from '../PortafolioContainer'
import {Body ,Portafolio, Grid, Item, Menu, Anchor, Icono, ListItem, ProyectoI, ElecI, WebI, MovilI} from './styles'
import {ParticulasBajo} from '../PartitulasBajo'
// import {proyectos} from '../../../api/db'
import {Caja} from './Ilustracion'
import {getItems} from '../../hooks/getItems'
import Context from '../../Context'
import {useTranslate} from 'react-translate'

export const PortfolioPageContainer = ({idioma})=>{
  const [elec, setElec] = useState(false)
  const [web, setWeb] = useState(false)
  const [movil, setMovil] = useState(false)

  const [loading, setLoading] = useState(false)
  const [proyectosSearch, errorProyectos] = getItems(`${process.env.URL}/proyectos`,setLoading)
  const [proyectos, setProyectos] = useState([])

  let servicio = window.location.search
  let search = servicio.split('?').join('').split('=').join('')
  let proyectShowed = proyectos;

  const t = useTranslate('portfolio')

  if(search){
    proyectShowed = proyectos.filter(proyecto => proyecto.servicio === search)
    if(search === 'proyecto' || search === 'diseno'){
      proyectShowed = proyectos
    }
  }
  
  return(
    <Portafolio>
      <Body/>
      <ParticulasBajo/>
      <Grid>
        <Item>
          <Menu>
            <ListItem activo={true}><Anchor to="/portfolio?=proyecto">{t('proyect')}</Anchor></ListItem>
            <ListItem><Anchor activo={search === 'electronica'} to="/portfolio?=electronica">
              <Icono><ElecI/></Icono>{t('elect')}</Anchor> </ListItem>
            <ListItem>
              <Anchor activo={search === 'web'} to="/portfolio?=web"><Icono><WebI/></Icono>{t('web')} </Anchor> </ListItem>
            <ListItem><Anchor activo={search === 'movil'} to="/portfolio?=movil">
              <Icono><MovilI/></Icono>{t('mobile')}</Anchor> </ListItem>
            {/*<ListItem><Anchor to="/portfolio?=diseno">
              <Icono><Caja/></Icono>
              Diseño </Anchor> </ListItem>*/}
          </Menu>
        </Item>
        <Context.Consumer>
          {
            ({proyects, handleProyects})=>{
              if(proyects[0] != undefined){
                setProyectos(proyects)
              }else{
                if(proyectosSearch[0]!= undefined){
                  let filtrar = proyectosSearch.filter(({estado})=> estado === 'finalizado')
                  handleProyects(filtrar)
                  setProyectos(filtrar)
                }
              }
              return (
                <PortafolioContainer idioma={idioma} pagina={true} proyectos={proyectShowed}/>
              )
            }
          }
        </Context.Consumer>
      </Grid>
    </Portafolio>
    
  )
}
