import React from 'react'
import {Proyectos,LoaderCircle,LoaderCircleItem} from './styles'
import {ProyectoItem} from "../ProyectoItem";
import PropTypes from 'prop-types'

export const PortafolioContainer = ({proyectos, pagina, idioma})=>{
  
  return(
    <Proyectos pagina={pagina}>
      {
        proyectos[0] === undefined

        ? pagina
          ? [1,2,3,4,5,6].map(indice=>   <LoaderCircle key={indice} ><LoaderCircleItem></LoaderCircleItem></LoaderCircle>)
          : [1,2,3,4].map(indice=>   <LoaderCircle key={indice} ><LoaderCircleItem></LoaderCircleItem></LoaderCircle>)

        : proyectos.map(proyecto =><ProyectoItem link={proyecto.link} idioma={idioma} key={proyecto._id} {...proyecto}/>)
      }
    </Proyectos>
  )
}

// PortafolioContainer.propTypes = {
//   proyectos: PropTypes.arrayOf(
//     PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         link: PropTypes.string.isRequired,
//         nombre:  PropTypes.string.isRequired,
//         caracteristicas:  PropTypes.string.isRequired,
//         descripcionShort:  PropTypes.string.isRequired
//       })),
//   pagina: PropTypes.boolean
// }
