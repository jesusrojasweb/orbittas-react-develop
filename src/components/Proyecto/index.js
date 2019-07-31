import React, {useState} from 'react'
import PropTypes from 'prop-types'

import {ProyectoDetails} from "../ProyectoDetails"
import {Body,ProyectoContainer, Grid, Volver, Item, Caption, Nombre, Descripcion, Texto, Boton, Icono, Imagen} from './styles'
import {FaAngleLeft} from "react-icons/fa";
import {ScrollIcon} from './Ilustraciones'
import {onScroll} from '../../hooks/onScroll'


export const Proyecto = ({id, link,nombre,src, descripcionShort, details, slogan})=>{
  const [scroll, setScroll] = onScroll(detectar)
  const [show, setShow] = useState(false)
  let contador = 0;

  function detectar(e) {
    if(e.deltaY > 0){
      
      if(contador == 0){
        toggle()
        contador = 1;
      }
    }
  }
  
  function toggle() {
    setShow(!show)
  }
  return(
    <ProyectoContainer>
      <Body/>
      <Grid>
        <Volver to="/portfolio"><FaAngleLeft/></Volver>
        <Imagen>
          <img src={src} alt="p4b"/>
        </Imagen>
        <Item>
          <Caption>{slogan}</Caption>
          <Nombre>{nombre}</Nombre>
          <Descripcion>{descripcionShort}</Descripcion>
          <Boton onClick={()=> setShow(true)} href="#"><Texto>Scroll para la información del proyecto</Texto> <Icono><ScrollIcon/> </Icono></Boton>
        </Item>
      </Grid>
      <ProyectoDetails mostrar={show} handleMostrar={setShow} {...details} descripcionShort={descripcionShort}  nombre={nombre} />
    </ProyectoContainer>
  )
}

Proyecto.propTypes = {
  id: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  descripcionShort: PropTypes.string.isRequired,
  details: PropTypes.shape({
    experiencia: PropTypes.string.isRequired.isRequired,
    servicio: PropTypes.string.isRequired.isRequired,
    brief: PropTypes.string.isRequired.isRequired,
    descripcionLong: PropTypes.string.isRequired.isRequired,
    primeraImagen: PropTypes.string.isRequired.isRequired,
    segundaImagen: PropTypes.string.isRequired
  }),
  slogan: PropTypes.string.isRequired
}
