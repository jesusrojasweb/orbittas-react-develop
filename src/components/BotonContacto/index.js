import React from 'react'
import ReactDOM from 'react-dom'
import {FaWhatsapp} from "react-icons/fa";
import {Boton} from './styles'

export const BotonContacto = ()=>{
  return <Boton href="http://consultas.orbittas.com" target="_blank">
    <FaWhatsapp/>
  </Boton>
}
