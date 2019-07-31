import React from 'react'
import {Portafolio, Grid, Proyectos} from "./styles";
import {ProyectoItem} from "../ProyectoItem";
import {PortafolioContainer} from "../PortafolioContainer";

export const PortafolioHome = ()=>(
  <Portafolio>
    <Grid>
      <PortafolioContainer/>
    </Grid>
  </Portafolio>
)
