import styled,{css} from 'styled-components'
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
  background: white;
  @media(${mobile}){
    overflow: hidden;
  }
`
export const Robot = styled.div`
  background: none;
`
export const Propulcion = styled.div`
  padding-right: 3em;
  margin-top: -1em;
  & img{
    ${floating()}
    width: 38% !important;
  }
  @media(${mobile}){
    padding-right: 3em;
    margin-top: -2em;
  }

`

export const Propuesta1Hover = styled.img`
  position: absolute;
  bottom: 1em;
  width: 30% !important;
  right: 10em;
  opacity: 0;
  transition: .3s;
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
    z-index: 500;
    &:hover{
      & ${Propuesta1Hover}{
        opacity: 1;
      }
    }
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
export const Title = styled.h1`
  font-family: ${fuentePrincipal};
  font-size: 8rem;
  color: #007993c7;
  margin: 0;
  z-index: 500;
  line-height: 1em;
  & strong{
    color: ${colorPrincipal}; 
  }
  @media(${mobile}){
    font-size: 3.9rem;
  }
`
export const Copy = styled.div`
  ${Margen}
  display: grid;
  grid-template-columns: 4fr 3fr;
  width: 100%;
  transition: .3s;
  tpadding-top: 11em;
  ${({idioma}) => idioma && css`
    grid-template-columns:  5fr 3fr;
    & ${Title}{
      font-size: 7rem;
    }
  ` }
  @media(${tablet}){
    height: auto;
  }
  @media(${mobile}){
    padding: 0 2em;
  }
  @media(${min}){
    height: 100vh !important;
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

export const Subitle = styled.h3`
  text-transform: uppercase;
  color: #007993;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0;
  z-index: 500;
  @media(${mobile}){
    font-size: 1.2rem;
  }
`
export const Cursor = styled.div`
  margin: 1em 0 0 .1em;
  border-left: .1em solid rgba(0,121,147,.8);
`
export const Container = styled.div`
  z-index: 500;
  margin-top: 2em;
`

export const Img = styled.img`
  position: absolute;
  right: 6em;
  bottom: 6em;
`

export const Btn = styled(Link)`
   ${btn}
   ${gradient()}
   border-color: rgb(0,121,147);
   color: white;
`
export const Propuesta1 = styled.img`
  position: absolute;
  bottom: 1em;
  width: 30% !important;
  right: 10em;
`
export const Propuesta2 = styled.img`
  position: absolute;
  bottom: 0;
  width: 30% !important;
  right: 9em;
`
export const Propuesta3 = styled.img`
  position: absolute;
  bottom: 2em;
  width: 30% !important;
  right: 9em;
`
export const Propuesta4 = styled.img`
  position: absolute;
  bottom: 4em;
  width: 30% !important;
  right: 9em;
`
// export const Robot2 = styled.img`
//   position: absolute;
//   width: 26% !important;
//   bottom: 6em;
//   right: 10em;
// `
