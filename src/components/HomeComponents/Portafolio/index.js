import React,{useState} from 'react'
import {Portafolio,Title, Grid, Btn} from "./styles";
import {PortafolioContainer} from "../../PortafolioContainer";
// import {proyectos} from '../../../../api/db'
import {useTranslate} from 'react-translate'
import {ParticulasBajo} from '../../PartitulasBajo'
import {Conexion} from '../../Conexion'
import {getItems} from '../../../hooks/getItems'



export const PortafolioHome = ()=>{
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
      <Portafolio>
        <ParticulasBajo/>
        <Grid>
          <Title>Conoce algunos de nuestros trabajos</Title>
          <PortafolioContainer proyectos={proyect} pagina={false} />
          <Btn to={`/portfolio`}>{t('button')}</Btn>
        </Grid>
        <Conexion/>
      </Portafolio>
    )
  }
