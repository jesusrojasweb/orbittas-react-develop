import React from 'react'
import {ParticulasBajo} from '../../PartitulasBajo'
import {Hero, Grid, Item, Title, Sangria, Spacing, Descripcion} from './styles'

export const HeroAbout = ()=>(
  <Hero>
    <ParticulasBajo/>
    <Grid>
      <Item>
        <Title>¡Aportamos <br/> <Sangria><Spacing>Va</Spacing>lor!</Sangria></Title>
      </Item>
      <Item>
        <Descripcion>Nuestro enfoque principal es desarrollar proyectos e impactar positivamente en cada proyecto del que formamos parte, manteniendo un alto nivel de compromiso en alcanzar los objetivos trazados.</Descripcion>
        <Descripcion>Practicamos el intercambio constante de ideas en un ambiente global , que nos permite mantenernos a la vanguardia de las tendencias actuales. </Descripcion>
      </Item>
    </Grid>
  </Hero>
)
