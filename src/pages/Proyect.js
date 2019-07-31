import React from 'react'
import {SEO} from '../components/SEO'
import {ProyectoView} from '../components/ProyectoView'


import {proyectos} from '../../api/db'



export default ({handleRuta, id})=>{
  
  const proyecto = proyectos.find(({link})=> link === id)

  handleRuta(id)
  return(
    <SEO
      title={proyecto.nombre}
      descripcion={proyecto.descripcionShort}
    >
      <ProyectoView id={id} proyecto={proyecto}  />
    </SEO>
  )
}
