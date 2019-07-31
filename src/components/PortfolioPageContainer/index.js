import React from 'react'
import {PortafolioContainer} from '../PortafolioContainer'
import {ProyectoServicios, ElectoServicios, Web, MOvil, Diseno} from '../ServicesComponents/Servicios/Ilustraciones'
import {Body ,Portafolio, Grid, Item, Menu, Anchor, Icono, ListItem} from './styles'
import {ParticulasFondo} from '../ParticulasFondo'
import {proyectos} from '../../../api/db'

export const PortfolioPageContainer = (props)=>{
  return(
    <Portafolio>
      <Body/>
      <ParticulasFondo/>
      <Grid>
        <Item>
          <Menu>
            <ListItem><Anchor to="/portfolio/proyecto">
              <Icono></Icono>
          Desarrollo de Proyectos</Anchor></ListItem>
            <ListItem><Anchor to="/portfolio/proyecto">
              <Icono></Icono>Electronica </Anchor> </ListItem>
            <ListItem>
              <Anchor to="/portfolio/proyecto"><Icono></Icono>Web </Anchor> </ListItem>
            <ListItem><Anchor to="/portfolio/proyecto">
              <Icono></Icono>Movil </Anchor> </ListItem>
            <ListItem><Anchor to="/portfolio/proyecto">
              <Icono></Icono>
              Diseño </Anchor> </ListItem>
          </Menu>
        </Item>
        <PortafolioContainer pagina={true} proyectos={proyectos}/>
      </Grid>
    </Portafolio>
    
  )
}
