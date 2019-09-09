import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import {ProyectoDetails} from "../ProyectoDetails"
import {Body,ProyectoContainer, Grid, Volver, Item, Caption, Nombre, Descripcion, Texto, Boton, Icono, Imagen} from './styles'
import {FaAngleLeft} from "react-icons/fa";
import {ScrollIcon} from './Ilustraciones'
import {smoothScroll} from '../../hooks/smoothScroll'


export const Proyecto = (proyecto)=>{
  const [scroll, setScroll] = useState(false)
  const [show, setShow] = useState(false)
  let contador = 0;
  let ancho = window.screen.availWidth;

  // useEffect(() => {
  //   document.addEventListener('mousewheel', (e)=> detectar(e))
  //   setScroll(true)
  //   return ()=> {
  //     document.addEventListener('mousewheel', (e)=> detectar(e))
  //     setScroll(false)
  //   }
  // }, [scroll])
  const {slogan, src, nombre, descripcionShort} = proyecto

  useEffect(() => {
    handleScroll()
  }, [])

  function handleScroll() {
    document.addEventListener('mousewheel', (e)=> detectar(e))
    setScroll(true)
  }


  function detectar(e) {
    console.log("se hizo scroll")
    if(e.deltaY > 0){
      toggle()
    }
  }
  function toggle() {
    setShow(!show)
  }
  
  function showDetail() {
    if(ancho > 800){
      setShow(true);
      console.log('mostrar show')
    } else{
      console.log('smooth')
      smoothScroll('details', 1000)
    }
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
          {slogan
            ? <Caption>{slogan}</Caption>
            : <br/>
          }
          
          <Nombre>{nombre}</Nombre>
          <Descripcion>{descripcionShort}</Descripcion>
          <Boton onClick={()=> showDetail()} href="#"><Texto>Scroll para la información del proyecto</Texto> <Icono><ScrollIcon/> </Icono></Boton>
        </Item>
      </Grid>
      <ProyectoDetails id="details" mostrar={show} handleMostrar={setShow} {...proyecto}/>
    </ProyectoContainer>
  )
}

// Proyecto.propTypes = {
//   id: PropTypes.string.isRequired,
//   link: PropTypes.string.isRequired,
//   nombre: PropTypes.string.isRequired,
//   src: PropTypes.string.isRequired,
//   descripcionShort: PropTypes.string.isRequired,
//   details: PropTypes.shape({
//     experiencia: PropTypes.string.isRequired.isRequired,
//     servicio: PropTypes.string.isRequired.isRequired,
//     brief: PropTypes.string.isRequired.isRequired,
//     descripcionLong: PropTypes.string.isRequired.isRequired,
//     primeraImagen: PropTypes.string.isRequired.isRequired,
//     segundaImagen: PropTypes.string.isRequired
//   }),
//   slogan: PropTypes.string.isRequired
// }
