import React from 'react'
import PropTypes from 'prop-types'

import {Proyecto, Imagen,Caracteristicas, Nombre} from "./styles";

const DEFAULT_IMAGE = 'https://jesusrojasweb.github.io/orbittas/img/mockup-p4b.png';

export const ProyectoItem = (({id, nombre = 'P4b', src = DEFAULT_IMAGE, caracteristicas= 'Wordpress', link='/portfolio/proyecto'})=>{
  return(
    <Proyecto to={`/portfolio/${link}`}>
      <Nombre>{nombre}</Nombre>
      <Imagen>
        <img src={src} alt={`${nombre} imagen`}/>

      </Imagen>
      <Caracteristicas>{caracteristicas}</Caracteristicas>
    </Proyecto>
  )
})

ProyectoItem.propTypes = {
  id: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  caracteristicas: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}
