import React from 'react'
import {Proyectos} from './styles'
import {ProyectoItem} from "../ProyectoItem";
import PropTypes from 'prop-types'

export const PortafolioContainer = ({proyectos, pagina, lang})=>{
  
  return(
    <Proyectos pagina={pagina}>
      {
        proyectos.map(idioma =>{
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
