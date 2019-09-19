import React, {useState} from 'react'
import {SEO} from '../components/SEO'
import {ProyectoView} from '../components/ProyectoView'
import {getItems} from '../hooks/getItems'
import Context from '../Context'


// import {proyectos} from '../../api/db'



export default ({handleRuta, link, idioma})=>{
  // const proyecto = proyectos.find(({link})=> link === id)
  const id = link.split('-')[0]
  const [loadingProyect, setLoadingProyect] = useState(false)
  const [proyectoSearch, errorProyecto] =  getItems(`${process.env.URL}/proyectos/${id}`,setLoadingProyect)
  const [proyecto, setProyecto] = useState({})

  handleRuta(id)
  return(
    <SEO
      title={proyecto.nombre}
      descripcion={proyecto.descripcionShort}
    >
      <Context.Consumer>
        {
          ({proyects})=>{
            if(proyects[0] != undefined){
              let filtrar = proyects.find(({_id})=> _id == id)
              setProyecto(filtrar)
            } else{
              if(proyectoSearch.nombre != undefined){
                setProyecto(proyectoSearch)
              }
            }
            return(
              <ProyectoView id={id} proyecto={proyecto}  idioma={idioma}/>
            )
          }
        }
      </Context.Consumer>
      
    </SEO>
  )
}
