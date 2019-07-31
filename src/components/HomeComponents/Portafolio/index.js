import React from 'react'
import {Portafolio, Grid, Btn} from "./styles";
import {PortafolioContainer} from "../../PortafolioContainer";
import {ParticulasFondo} from '../../ParticulasFondo'
import {proyectos} from '../../../../api/db'

const proyect = proyectos.slice(0,4)


export const PortafolioHome = ()=>(
  <Portafolio>
    <ParticulasFondo/>
    <Grid>
      <PortafolioContainer proyectos={proyect} pagina={false} />
      <Btn to={`/portfolio`}>Ver Más</Btn>
    </Grid>
  </Portafolio>
)
