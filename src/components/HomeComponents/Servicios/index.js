import React from 'react'
import {Proyectos, Electronica, Movil, Web} from "./Ilustraciones";
import {Head,Servicios, Grid, Descripcion, Item, NombreServicio,Title} from "./styles";
import {useTranslate} from 'react-translate'

export const ServiciosHome = ()=> {
  let servicios = useTranslate('servicesName')
  let descripciones = useTranslate('servicesHomePage')
  return(
      <Servicios>
        <Grid>
          <Title>{servicios('title')}</Title>
          <Item>
            <Head to={`/services#proyecto`}>
              <Proyectos/>
            </Head>
            <NombreServicio>{servicios('proyects')}</NombreServicio>
            <Descripcion>{descripciones('proyectsDescription')}</Descripcion>
          </Item>
          <Item>
            <Head to={`/services#electronica`}>
              <Electronica/>
            </Head>
            <NombreServicio>{servicios('electronic')}</NombreServicio>
            <Descripcion>{descripciones('electronicDescription')}</Descripcion>
          </Item>
          <Item>
            <Head to={`/services#web`}>
              <Web/>
            </Head>
            <NombreServicio>{servicios('web')}</NombreServicio>
            <Descripcion>{descripciones('webDescription')}</Descripcion>
          </Item>
          <Item>
            <Head to={`/services#movil`}>
              <Movil/>
            </Head>
            <NombreServicio>{servicios('movil')}</NombreServicio>
            <Descripcion>{descripciones('movilDescription')}</Descripcion>
          </Item>
        </Grid>
      </Servicios>
    )
  }
