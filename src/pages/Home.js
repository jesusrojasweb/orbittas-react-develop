import React from 'react'
import {HeroHome} from '../components/HomeComponents/Hero'
import {AboutHome} from "../components/HomeComponents/About";
import {ServiciosHome} from "../components/HomeComponents/Servicios";
import {PortafolioHome} from "../components/HomeComponents/Portafolio";
import {SEO} from "../components/SEO";
import {ContactoHome} from "../components/HomeComponents/Contacto";

const descripcion = 'Somos un equipo apasionado por la tecnología e innovación, conformado por profesionales en diversas áreas.'

export default ()=>{
  return (
    <SEO 
      title={`ORBITTAS - Agencia Digital`}
      descripcion={descripcion}
    >
      <HeroHome/>
      <AboutHome/>
      <ServiciosHome/>
      <PortafolioHome/>
      <ContactoHome/>
    </SEO>
  )
}
