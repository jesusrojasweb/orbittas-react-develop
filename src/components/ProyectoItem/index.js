import React from 'react'
import PropTypes from 'prop-types'

import {Proyecto, Imagen,Caracteristicas, Nombre} from "./styles";

const DEFAULT_IMAGE = 'https://jesusrojasweb.github.io/orbittas/img/mockup-p4b.png';

export const ProyectoItem = (({_id, nombre = 'P4b', src = DEFAULT_IMAGE, caracteristicas= 'Wordpress', link='/portfolio/proyecto', idioma, nombreEn})=>{

  return(
    <Proyecto to={`/portfolio/${_id}-${link}`}>
      {
        idioma
        ? <Nombre>{nombreEn}</Nombre>
        : <Nombre>{nombre}</Nombre>
      }
      
      <Imagen>
        <img src={src} alt={`${nombre} imagen`}/>

      </Imagen>
      <Caracteristicas>
        {
          caracteristicas.slice(0,3).map(({value})=> value + ' / ')
        }
      </Caracteristicas>
    </Proyecto>
  )
})

ProyectoItem.propTypes = {
  _id: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  caracteristicas: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}
