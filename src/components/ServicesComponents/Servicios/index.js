import React,{Fragment} from 'react'
import {Service} from '../../Service'
import {ProyectoServicios} from './Ilustraciones'

const servicioDefault = [
  {
    "right": true,
    "id": `proyectos`
  },
  {
    "right": false,
    "id": 'electronica'
  },
  {
    "right": true,
    "id": 'web'
  },
  {
    "right": false,
    "id": 'movil'
  },
]

export const ServiciosContainer = ()=>{
  return(
    <Fragment>
      {
        servicioDefault.map(({id, right})=> <Service right={right} key={id} id={id} SvgImage={ProyectoServicios}/>)
      }
      
    </Fragment>

  )
}
