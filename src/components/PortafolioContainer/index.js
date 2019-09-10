import React from 'react'
import {Proyectos,LoaderCircle,LoaderCircleItem} from './styles'
import {ProyectoItem} from "../ProyectoItem";
import PropTypes from 'prop-types'

export const PortafolioContainer = ({proyectos, pagina, lang})=>{
  
  return(
    <Proyectos pagina={pagina}>
      {
        proyectos[0] === undefined

        ? pagina
          ? [1,2,3,4,5,6].map(indice=>   <LoaderCircle key={indice} ><LoaderCircleItem></LoaderCircleItem></LoaderCircle>)
          : [1,2,3,4].map(indice=>   <LoaderCircle key={indice} ><LoaderCircleItem></LoaderCircleItem></LoaderCircle>)

        : proyectos.map(idioma =>{
            if(lang == 'es'){
              return <ProyectoItem link={idioma.link} lang={lang} key={idioma._id} {...idioma} lang={lang} />
            } else{
              return <ProyectoItem link={idioma.link} lang={lang} key={idioma._id} {...idioma} lang={lang}/>
            }
          })
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
