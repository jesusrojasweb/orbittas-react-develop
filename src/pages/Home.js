import React from 'react'
import {HeroHome} from '../components/HomeComponents/Hero'
import {AboutHome} from "../components/HomeComponents/About";
import {ServiciosHome} from "../components/HomeComponents/Servicios";
import {PortafolioHome} from "../components/HomeComponents/Portafolio";
import {Testimonios} from "../components/Testimonios";
import {SEO} from "../components/SEO";
import {ContactoHome} from "../components/HomeComponents/Contacto";
import {Contenedor} from './HomeStyles'
import {ParticulasFondo} from '../components/ParticulasFondo'

const descripcion = 'Somos un equipo apasionado por la tecnología e innovación, conformado por profesionales en diversas áreas.'

export default ({idioma, changed,handleChange,propuesta})=>{
  let title
  if(!idioma){
    title = 'ORBITTAS - Agencia Digital'
  }else{
    title = 'ORBITTAS - Digital Agency'
  }
  return (
    <SEO 
      title={title}
      descripcion={descripcion}
    >
      <Contenedor>
        {/*<ParticulasFondo/>*/}
        <HeroHome changed={changed} handleChange={handleChange} idioma={idioma} propuesta={propuesta}/>
        <AboutHome idioma={idioma}/>
        <ServiciosHome idioma={idioma}/>
        <PortafolioHome idioma={idioma}/>
        <Testimonios idioma={idioma} />
        <ContactoHome idioma={idioma}/>
      </Contenedor>
    </SEO>
  )
}
