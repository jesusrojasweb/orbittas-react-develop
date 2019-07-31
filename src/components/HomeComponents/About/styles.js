import styled from 'styled-components'
import {colorPrincipal, btn, colorFluerecente,tablet,mobile,desktop} from "../../../styles/variables";
import {Link} from "@reach/router";
import {Margen} from "../../../styles/Styles";
import {rotate} from '../../../styles/animations'

export const About = styled.section`
  background: ${colorPrincipal};
  align-items: center;
  width: 100%;
  position: relative;
  overflow-x: visible;
  @media(${mobile}){
    height: auto;
  }
`

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: space-evenly;
  padding-top:4em;
  ${Margen}
  @media(${mobile}){
    height: auto;
    & .img{
      margin: 0 !important;
      width: 100% !important;
    }
  }
`

export const Item = styled.div`
  &:nth-of-type(1){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4em;
    align-items: center;
    @media(${mobile}){
      grid-template-columns: 1fr;
      margin-bottom: 3em;
    }
  }
  &:last-child{
    z-index: 1000;
    justify-self: flex-end;
    @media(${mobile}){
      margin-bottom: 4em;
    }
  }
`
export const Imagen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & img{
    position: absolute;
    width: 70%;
    &:first-child{
      width: 55%;
    }
  }
  @media(${mobile}){
    display: none;
  }
`
export const ImageRotate = styled.img`
  ${rotate}
`
export const Descripcion = styled.p`
  margin: 0 0 1em;
  background: ${colorPrincipal};
  @media(${mobile}){
    text-align: justify;
  }
`
export const Cualidades = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  margin-top: 2em;
  @media(${tablet}){
    margin-top: 2em;
  }
  @media(${desktop}){
    margin-top: 2em;
  }
`
export const Icono = styled.div`
  width: 13%;
  @media(${tablet}){
    width: 20%;
  }
`
export const Cualidad = styled.div`
  display: flex;
  align-items: center;
  background: ${colorPrincipal};
  &:nth-of-type(2){
    & ${Icono}{
        width: 8%;
    }
  }
  @media(${mobile}){
    flex-direction: column;
    text-align: center;
  }
`

export const CualidadNombre = styled.span`
  margin-left: 1em;
  @media(${mobile}){
    margin-left: 0;
  }
`
export const Btn = styled(Link)`
  ${btn}
  border: 1px solid white;
  z-index: 900;
  &:hover{
    border-color: ${colorFluerecente};
    background: ${colorFluerecente};
    color: ${colorPrincipal};
  }
`
export const Contenedor = styled.div`
  background: none;
`
