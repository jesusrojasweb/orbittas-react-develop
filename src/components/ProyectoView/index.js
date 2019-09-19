import React from 'react'
import {Proyecto} from '../Proyecto'
import PropTypes from 'prop-types'

export const ProyectoView = ({proyecto, idioma})=>{
  console.log(proyecto)
  return(
    <Proyecto {...proyecto} idioma={idioma} />
  )
}

// ProyectoView.propTypes = {
//   proyecto: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     link: PropTypes.string.isRequired,
//     nombre: PropTypes.string.isRequired,
//     caracteristicas: PropTypes.string.isRequired,
//     src: PropTypes.string.isRequired,
//     descripcionShort: PropTypes.string.isRequired,
//     slogan: PropTypes.string.isRequired,
//     details: PropTypes.shape({
//       experiencia: PropTypes.string.isRequired,
//       servicio: PropTypes.string.isRequired,
//       brief: PropTypes.string.isRequired,
//       descripcionLong: PropTypes.string.isRequired,
//       primeraImagen: PropTypes.string.isRequired,
//       segundaImagen: PropTypes.string.isRequired
//     })
//   })
// }
