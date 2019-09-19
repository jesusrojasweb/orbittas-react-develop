import React,{useState} from 'react'
import {Portafolio,Title, Grid, Btn} from "./styles";
import {PortafolioContainer} from "../../PortafolioContainer";
// import {proyectos} from '../../../../api/db'
import {useTranslate} from 'react-translate'
import {ParticulasBajo} from '../../PartitulasBajo'
import {Conexion} from '../../Conexion'
import {getItems} from '../../../hooks/getItems'
import Context from '../../../Context'



export const PortafolioHome = ({idioma})=>{
  const [loading, setLoading] = useState(false)
  const [proyectos, errorProyectos] = getItems(`${process.env.URL}/proyectos`,setLoading)
  const proyect = proyectos.slice(0,4)
  if(loading){
    console.log('cargando proyectos')
  } else{
    console.log('ya se cargaron los proyectos')
  }

  let t = useTranslate('portfolioHomePage')
  return(
    <Context.Consumer>
      {
        ({handleProyects})=>{
          if(proyectos[0] != undefined){
            handleProyects(proyectos)
          }
          return (
            <Portafolio>
              <ParticulasBajo/>
              <Grid>
                <Title>{t('title')}</Title>
                <PortafolioContainer proyectos={proyect} pagina={false} idioma={idioma} />
                <Btn to={`/portfolio`}>{t('button')}</Btn>
              </Grid>
              <Conexion/>
            </Portafolio>
            
          )
        }
      }
    </Context.Consumer>
    )
  }
