import React, {Fragment} from 'react'
import {HeroServicios } from '../components/ServicesComponents/Hero'
import {ServiciosContainer } from '../components/ServicesComponents/Servicios'
import {SEO} from "../components/SEO";

export default ({idioma, navigate})=>{
  console.log(navigate)
  return (
    <SEO
      title="Services"
      descripcion="En Orbittas desarrollamos proyectos que involucran diferentes áreas de la tecnología, entendiendo que la integración de las mismas es la fuerza del futuro."
    >

      <HeroServicios idioma={idioma} />
      <ServiciosContainer idioma={idioma}/>
    </SEO>

  )
}
