import React,{Fragment, useEffect} from 'react'
import {Service} from '../../Service'
import {ProyectoServicios} from './Ilustraciones'

import {servicios} from '../../../../api/db.json'
import {smoothScroll} from '../../../hooks/smoothScroll'

export const ServiciosContainer = ()=>{
  
  useEffect(()=>{

    const id=  window.location.hash.split('#')[1]
    console.log(id)
    
    if(id){
      smoothScroll(id,1000)
    }
  }
    ,[false])

  return(
    <Fragment>
      {
        servicios.map((servicio)=> <Service {...servicio} SvgImage={ProyectoServicios}/>)
      }
      
    </Fragment>

  )
}
