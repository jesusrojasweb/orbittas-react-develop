import React from 'react'
import {Link} from "@reach/router";
import {Proyectos, Electronica, Movil, Web} from "./Ilustraciones";
import {Servicios, Grid, Descripcion, Item, NombreServicio} from "./styles";

export const ServiciosHome = ()=> (
  <Servicios>
    <Grid>
      <Item>
        <Link to="/services#proyectos">
          <Proyectos/>
        </Link>
        <NombreServicio>Gestión de Proyectos</NombreServicio>
        <Descripcion>Realizamos el planeamiento, gestión y ejecución de tu proyecto</Descripcion>
      </Item>
      <Item>
        <Link to="/services#electronica">
          <Electronica/>
        </Link>
        <NombreServicio>Desarrollo Electronico</NombreServicio>
        <Descripcion>Diseñamos sistemas inteligentes a cualquier escala.</Descripcion>
      </Item>
      <Item>
        <Link to="/services#web">
          <Web/>
        </Link>
        <NombreServicio>Desarrollo Web</NombreServicio>
        <Descripcion>Aplicaciones que brindan experiencias de usuario en ambientes innovadores</Descripcion>
      </Item>
      <Item>
        <Link to="/services.html#movil">
          <Movil/>
        </Link>
        <NombreServicio>Aplicaciones Movil</NombreServicio>
        <Descripcion>Tu empresa en dispositivos móviles con herramientas de última generación.</Descripcion>
      </Item>
    </Grid>
  </Servicios>
)
