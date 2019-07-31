import React from 'react'
import {Proyectos, Electronica, Movil, Web} from "./Ilustraciones";
import {Head,Servicios, Grid, Descripcion, Item, NombreServicio} from "./styles";

export const ServiciosHome = ()=> (
  <Servicios>
    <Grid>
      <Item>
        <Head to="/services#proyectos">
          <Proyectos/>
        </Head>
        <NombreServicio>Gestión de Proyectos</NombreServicio>
        <Descripcion>Realizamos el planeamiento, gestión y ejecución de tu proyecto</Descripcion>
      </Item>
      <Item>
        <Head to="/services#electronica">
          <Electronica/>
        </Head>
        <NombreServicio>Desarrollo Electronico</NombreServicio>
        <Descripcion>Diseñamos sistemas inteligentes a cualquier escala.</Descripcion>
      </Item>
      <Item>
        <Head to="/services#web">
          <Web/>
        </Head>
        <NombreServicio>Desarrollo Web</NombreServicio>
        <Descripcion>Aplicaciones que brindan experiencias de usuario en ambientes innovadores</Descripcion>
      </Item>
      <Item>
        <Head to="/services#movil">
          <Movil/>
        </Head>
        <NombreServicio>Aplicaciones Movil</NombreServicio>
        <Descripcion>Tu empresa en dispositivos móviles con herramientas de última generación.</Descripcion>
      </Item>
    </Grid>
  </Servicios>
)
