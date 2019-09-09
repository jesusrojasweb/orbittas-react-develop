import React, {useState} from 'react'
import {SEO} from '../components/SEO'
import {ProyectoView} from '../components/ProyectoView'
import {getItems} from '../hooks/getItems'


// import {proyectos} from '../../api/db'



export default ({handleRuta, link, lang})=>{
  // const proyecto = proyectos.find(({link})=> link === id)
  const id = link.split('-')[0]
  const [loadingProyect, setLoadingProyect] = useState(false)
  const [proyecto, errorProyecto] =  getItems(`${process.env.URL}/proyectos/${id}`,setLoadingProyect)

  console.log(proyecto)

  handleRuta(id)
  return(
    <SEO
      title={proyecto.nombre}
      descripcion={proyecto.descripcionShort}
    >
      <ProyectoView id={id} proyecto={proyecto}  lang={lang}/>
    </SEO>
  )
}
