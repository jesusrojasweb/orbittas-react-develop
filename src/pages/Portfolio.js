import React, {Fragment} from 'react'
import {SEO} from "../components/SEO";
import {PortafolioContainer} from "../components/PortafolioContainer";
import Reacr from 'react'
import {PortfolioPageContainer} from '../components/PortfolioPageContainer'


export default ({idioma})=>{
  return (
    <SEO
      title="Portafolio"
    >
      <PortfolioPageContainer idioma={idioma}/>
    </SEO>
  )
}
