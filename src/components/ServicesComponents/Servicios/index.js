import React,{Fragment, useEffect} from 'react'
import {Service} from '../../Service'
import {ProyectoServicios} from './Ilustraciones'

import {servicios} from '../../../../api/db.json'
import {smoothScroll} from '../../../hooks/smoothScroll'

export const ServiciosContainer = ({idioma})=>{
  
  useEffect(()=>{
    window.scrollBy(0, -window.innerHeight);
    const id =  window.location.hash.split('#')[1]
    
    if(id){
      smoothScroll(id,1000)
    }
  },[])

  return(
    <Fragment>
      {
        servicios.map((servicio)=> <Service {...servicio} SvgImage={ProyectoServicios} idioma={idioma}/>)
      }
      
    </Fragment>

  )
}
