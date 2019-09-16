import styled, {css} from 'styled-components'
import {colorPrincipal, tituloSecundario, fuenteSecundaria, mobile, min} from '../../styles/variables'

export const Figure = styled.figure`
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${colorPrincipal};
  position: absolute;
  width: 10%;
  left: 45%;
  top: -22.5%;
  padding-bottom: 10%;
  height: 0px;
  @media(${mobile}){
    width: 30%;
    left: 35%;
    top: -7%;
    padding-bottom: 30%;
  }
  @media(${min}){
    top: -4% !important;
  }
`

export const Container = styled.div`
  background: white;
  border-radius: 5px;
  position: absolute;
  background: #f3f3f3;
  transform: translate(140%);
  transition: .3s;
  margin: 0;
  text-align: center;
  width: 80%;
  &.active{
    z-index: 10;
    transform: translate(0);
    box-shadow: 0px 6px 20px 5px lightgrey;
  }
  @media(${mobile}){
    width: 85%;
  }
`
export const Relative = styled.div`
  position: relative;
  padding: 4em;
  @media(${mobile}){
    padding: 2em;
  }
`

export const Descripcion = styled.p`
  font-size: 1rem;
`

export const Nombre = styled.h4`
  color: ${colorPrincipal};
  font-family: ${tituloSecundario};
`

export const Cargo = styled.small`
  font-family: ${fuenteSecundaria};
  color: ${colorPrincipal};
`
