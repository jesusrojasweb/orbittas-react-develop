import React , {Fragment} from 'react'
import {Helmet} from 'react-helmet'

export const SEO = ({children, title, descripcion})=> {
  return(
    <Fragment>
      <Helmet>
        <link rel="icon" type="image/png" href="https://jesusrojasweb.github.io/orbittas/img/favicon.png"/>
        {
          title && <title>{title}</title>
        }
        {
          descripcion && <meta name='description' content={descripcion}/>
        }
        {title && <meta property="og:title" content={title}/>}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="http://orbittas.com"/>
        <meta property="og:image" content="https://jesusrojasweb.github.io/orbittas/img/captura.png"/>
        <meta property="og:image:alt" content="https://jesusrojasweb.github.io/orbittas/img/captura.png"/>
      </Helmet>
      {children}
    </Fragment>
  )
}
