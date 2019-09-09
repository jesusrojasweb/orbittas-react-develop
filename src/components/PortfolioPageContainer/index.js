import React, {useState} from 'react'
import {PortafolioContainer} from '../PortafolioContainer'
import {Body ,Portafolio, Grid, Item, Menu, Anchor, Icono, ListItem, ProyectoI, ElecI, WebI, MovilI} from './styles'
import {ParticulasBajo} from '../PartitulasBajo'
// import {proyectos} from '../../../api/db'
import {Caja} from './Ilustracion'
import {getItems} from '../../hooks/getItems'

export const PortfolioPageContainer = ({lang})=>{
  const [elec, setElec] = useState(false)
  const [web, setWeb] = useState(false)
  const [movil, setMovil] = useState(false)

  const [loading, setLoading] = useState(false)
  const [proyectos, errorProyectos] = getItems(`${process.env.URL}/proyectos`,setLoading)

  let servicio = window.location.search
  let search = servicio.split('?').join('').split('=').join('')
  let proyectShowed = proyectos;

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
            <ListItem activo={true}><Anchor to="/portfolio?=proyecto">
          Gestion de Proyectos</Anchor></ListItem>
            <ListItem><Anchor activo={search === 'electronica'} to="/portfolio?=electronica">
              <Icono><ElecI/></Icono>Electronica </Anchor> </ListItem>
            <ListItem>
              <Anchor activo={search === 'web'} to="/portfolio?=web"><Icono><WebI/></Icono>Web </Anchor> </ListItem>
            <ListItem><Anchor activo={search === 'movil'} to="/portfolio?=movil">
              <Icono><MovilI/></Icono>Movil </Anchor> </ListItem>
            {/*<ListItem><Anchor to="/portfolio?=diseno">
              <Icono><Caja/></Icono>
              Diseño </Anchor> </ListItem>*/}
          </Menu>
        </Item>
        <PortafolioContainer lang={lang} pagina={true} proyectos={proyectShowed}/>
      </Grid>
    </Portafolio>
    
  )
}
