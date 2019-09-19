import React, {Fragment} from 'react'
import {HeroServicios } from '../components/ServicesComponents/Hero'
import {ServiciosContainer } from '../components/ServicesComponents/Servicios'

export default ({idioma, navigate})=>{
  console.log(navigate)
  return (
    <Fragment>
      <HeroServicios idioma={idioma} />
      <ServiciosContainer idioma={idioma}/>
    </Fragment>
  )
}
