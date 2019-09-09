import React from 'react'
import {Helmet} from 'react-helmet'
import {SEO} from "../components/SEO";
import {HeroAbout} from '../components/AboutComponents/Hero'
import {ValoresAbout} from '../components/AboutComponents/Valores'
import {EquipoAbout} from '../components/AboutComponents/Equipo'

const descripcion = 'Nuestro enfoque principal es desarrollar proyectos e impactar positivamente en cada proyecto del que formamos parte, manteniendo un alto nivel de compromiso en alcanzar los objetivos trazados.'
export default ({idioma})=>{
  return (
    <SEO 
      title="About" 
      descripcion={descripcion}
    >
      <HeroAbout idioma={idioma}/>
      <ValoresAbout/>
      <EquipoAbout/>
    </SEO>
  )
}
