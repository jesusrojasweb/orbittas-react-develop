import styled from 'styled-components'
import {Margen} from '../../../styles/Styles'
import {fuentePrincipal,colorPrincipal,btn,gradient, mobile,tablet, min} from '../../../styles/variables'
import {Link} from "@reach/router";
import Particles from 'react-particles-js'
import {floating} from '../../../styles/animations'

export const Particulas = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
`

export const Hero = styled.section`
  box-sizing: border-box;
  position: relative;
  @media(${mobile}){
    overflow: hidden;
  }
`
export const Robot = styled.div`
  background: none;
`
export const Propulcion = styled.div`
  padding-right: 4em;
  margin-top: -3em;
  & img{
    ${floating()}
  }
  @media(${mobile}){
    padding-right: 3em;
    margin-top: -2em;
  }

`
export const Item = styled.div`
  &:first-child{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media(${tablet}){
      height: 70%;
    }
    @media(${mobile}){
      height: 50% !important;
      padding-top: 6em;

    }
    @media(${min}){
      height: 70% !important;
    }
  }
  &:last-child{
    padding-top: 1.5em;
    z-index: 1000;
    & ${Robot}, & ${Propulcion}{
      display: flex;
      justify-content: center;
    }
    & img{
      width: 50%;
    }
    @media(${mobile}){
      position: relative !important;
      margin-top: 3em;
    }
    @media(${min}){
      display: none;
    }
  } 
`
export const Copy = styled.div`
  ${Margen}
  display: grid;
  grid-template-columns: 4fr 3fr;
  width: 100%;
  transition: .3s;
  tpadding-top: 11em;
  @media(${tablet}){
    height: auto;
  }
  @media(${mobile}){
    padding: 0 2em;
  }
  @media(${tablet}){
    align-items: center;
    grid-template-columns: 1fr;
    & .item:last-child{
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: .6;
      top: 20%;
    }
  }
`

export const Title = styled.h1`
  font-family: ${fuentePrincipal};
  font-size: 8rem;
  color: #007993c7;
  margin: 0;
  z-index: 1000;
  line-height: 1em;
  & strong{
    color: ${colorPrincipal}; 
  }
  @media(${mobile}){
    font-size: 4rem;
  }
`
export const Subitle = styled.h3`
  text-transform: uppercase;
  color: #007993;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0;
  z-index: 1000;
  @media(${mobile}){
    font-size: 1.2rem;
  }
`
export const Cursor = styled.div`
  margin: 1em 0 0 .1em;
  border-left: .1em solid rgba(0,121,147,.8);
`
export const Container = styled.div`
  z-index: 1000;
  margin-top: 2em;
`
export const Btn = styled(Link)`
   ${btn}
   ${gradient()}
   color: white;
   border: none;
`
