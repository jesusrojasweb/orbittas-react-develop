import styled from 'styled-components'
import {Margen} from "../../../styles/Styles";
import {btn, colorPrincipal, fuentePrincipal, gradient, mobile, tablet, min} from "../../../styles/variables";
import {Link} from "@reach/router";

export const Contacto = styled.section`
  overflow: hidden;
  background: white;
`

export const Grid = styled.div`
  ${Margen}
  display: grid;
  grid-template-columns: 1fr 50px;
  grid-gap: 0 2em;
  padding-bottom: 0;
  position: relative;
  padding-top: 7em;
  height: 100vh;
  box-sizing: border-box;
  @media(${tablet}){
    grid-template-columns: 1fr;
    height: 92.5vh;
  }
  @media(${mobile}){
    height: auto !important;
    padding-bottom: 6em;
  }
  @media(min-width: 1420px){
    height: 700px;
  }
  @media(${tablet}){
    grid-template-columns: 1fr;
  }
  @media(${mobile}){
    padding-top: 4em;
    height: auto;
    & .item{
      /*width: 80%;*/
    }
  }
`

export const Animanos = styled.h2`
  color: ${colorPrincipal};
  font-family: ${fuentePrincipal};
  font-size: 2rem;
  margin-bottom: 1.5em;
  @media(${mobile}){
    font-size: 1.2rem;
  }
`

export const Btn = styled(Link)`
    ${btn()}
    ${gradient()}
`
export const Informacion = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-top: 2em;
  text-align: center
  @media(${mobile}){
    width: 100%;
    margin-bottom: 2em;
  }
`

export const Info = styled.ul`
  list-style: none;
`

export const Iconos = styled.div`
  display: grid;
  grid-template-columns: repeat(5,1fr);
  grid-gap: 5em;
  margin-bottom: 2em;
  @media(${tablet}){
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2em 5em;
  }
  @media(${mobile}){
    grid-template-columns: 25vw 25vw !important;
    justify-content: center;
  }
  @media(min-width: 1420px){
    grid-gap: 2em;
  }
`
export const IconosItem = styled.div`
  background: none;
`
export const Icono = styled.div`
  background: none;
`
export const Caracteristica = styled.div`
  background: none;
`
export const Descripcion = styled.p`
  @media(${mobile}){

    font-size: .55rem;
  }
`
export const GridItem = styled.div`
  &:first-child{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    text-align: center;
  }
  &:last-child{
    @media(${mobile}){
      
      display: grid;
      grid-template-columns: 1fr 25vw;
      grid-column: 2 span;
      grid-gap: 2em;
      align-items: center;
      & ${Icono}{
        grid-column-start: 2;
      }
      & ${Caracteristica}{
        grid-column-start: 1;
        grid-row-start: 1;
      }
    }
  }
`

export const Sociales = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  margin-top: 8em;
  flex-direction: column;
  align-items: center;
  @media(${tablet}){
    flex-direction: row;
    margin-top: 0;
    justify-content: space-around;
  }
`
export const Tiptext = styled.span`
  visibility: hidden;
  background: black;
  color: white;
  text-align: center;
  border-radius: 5px;
  padding: 6px 1em;
  position: absolute;
  z-index: 1;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  top: -9px;
  right: 125%;
  font-size: 1rem;
  opacity: 0;
  transition: .3s;
  width: 8em
`

export const Tooltip = styled.a`
  color: ${colorPrincipal};
  font-size: 2.5rem;
  position: relative;
  &:hover ${Tiptext}{
    visibility: visible;
    opacity: 1;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-content: center;
  grid-column: 2 span;
  background: ${colorPrincipal};
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 1em;
  box-sizing: border-box;
`
export const Copy = styled.p`
  display: flex;
  justify-content: center;
  color: white;
  margin: 0;
`

