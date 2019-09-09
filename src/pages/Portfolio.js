import React, {Fragment} from 'react'
import {SEO} from "../components/SEO";
import {PortafolioContainer} from "../components/PortafolioContainer";
import Reacr from 'react'
import {PortfolioPageContainer} from '../components/PortfolioPageContainer'


export default ({lang})=>{
  return (
    <SEO
      title="Portafolio"
    >
      <PortfolioPageContainer lang={lang}/>
    </SEO>
  )
}
