
import React from 'react'
import {ParticulasBajo} from '../../PartitulasBajo'

import {Hero, Container, Item, Contenedor, Grid, Icono, Title, Spacing, Ancho, Descripcion} from './styles'
import {HeroProyecto, HeroElec, HeroWeb, HeroMovil} from './Ilustraciones'

export const HeroServicios = ()=>{
  return(
    <Hero>
      <ParticulasBajo/>
      <Container>
        <Contenedor>
          <Item>
            <Title><Ancho>Tecnologia de</Ancho> <Spacing>va</Spacing>nguardia</Title>
          </Item>
          <Item>
            <Descripcion>En Orbittas desarrollamos proyectos que involucran diferentes áreas de la tecnología, entendiendo que la integración de las mismas es la fuerza del futuro.</Descripcion>
            <Descripcion>Nuestra diversidad y flexibilidad nos potencia a obtener capacidad de respuesta rápida y ágil ante las demandas actuales.</Descripcion>
            <Grid>
              <Icono href="#proyectos">
                <HeroProyecto/>
              </Icono>
              <Icono href="#electronica">
                <HeroElec/>
              </Icono>
              <Icono href="#web">
                <HeroWeb/>

              </Icono>
              <Icono href="#movil">
                <HeroMovil/>

              </Icono>
            </Grid>
          </Item>
        </Contenedor>
      </Container>
    </Hero>
  )
}
