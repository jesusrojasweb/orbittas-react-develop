import React , {Fragment} from 'react'
import {Helmet} from 'react-helmet'

export const SEO = ({children, title, descripcion})=> {
  return(
    <Fragment>
      <Helmet>
        {
          title && <title>{title}</title>
        }
        {
          descripcion && <meta name='description' content={descripcion}/>
        }
        {title && <meta property="og:title" content={title}/>}
        
      </Helmet>
      {children}
    </Fragment>
  )
}
