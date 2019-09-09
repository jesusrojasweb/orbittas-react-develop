import styled,{createGlobalStyle} from 'styled-components'
import {Link} from '@reach/router'
import {Margen} from "../../styles/Styles";
import {colorPrincipal, tablet, mobile, fuentePrincipal, fuenteSecundaria, min} from "../../styles/variables";
import {floating, floatingLeftAngle} from "../../styles/animations";

export const Body = createGlobalStyle`
  body{
    overflow: hidden;
    @media(${tablet}){
      overflow: scroll;
    }
  }
`

export const ProyectoContainer = styled.section`
  background: ${colorPrincipal};
  position: relative;
  @media(${tablet}){
    width: 100%;
    height: auto;
  }
`

export const Grid = styled.div`
  ${Margen}
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5em;
  position: relative;
  background: ${colorPrincipal};
  @media(${tablet}){
    grid-template-columns: 1fr;
    width: 100%;
    position: fixed;
  }
  @media(${mobile}){
    padding: 7em 3em 4em;
    grid-gap: 1em;
  }
  @media(${min}){
    height: auto;
  }
`
export const Volver = styled(Link)`
  position: absolute;
  color: white;
  font-size: 2rem;
  left: 3em;
  bottom: 2em;
  text-decoration: none;
  z-index: 900;
  ${floatingLeftAngle()}
  @media(${tablet}){
    bottom: inherit;
    top: 6em;
  }
  @media(${mobile}){
    left: 1em;
    top: 2.8em;
  }
  &:hover{
    background: none;
    box-shadow: 0 0 50px #00b5ff;
  }
`

export const Item = styled.div`
  text-align: end;
  @media(${tablet}){
    text-align: center;
  }
`
export const Caption = styled.h3`
  color: white;
  opacity: .5;
  text-transform: uppercase;
  @media(${mobile}){
    font-size: 1rem;  
  }
`
export const Nombre = styled.h1`
  color: white;
  font-family: ${fuentePrincipal};
  font-size: 5rem;
  margin: 0;
  @media(${mobile}){
    font-size: 2rem;
  }
`

export const Descripcion = styled.p`
  color: white;
  @media(${mobile}){ 
    font-size: .9rem;
  }
`
export const Texto = styled.span`
  background: none;
`

export const Boton = styled.a`
  color: white;
  background: none;
  border: none;
  font-family: ${fuenteSecundaria};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  @media(${tablet}){
    display: flex;
    justify-content: center;
    & ${Texto}{
      display: none;
    }
  }
`
export const Icono = styled.span`
  width: 4%;
  margin-left: 1em;
  ${floating()}
  @media(${mobile}){
    width: 8%;
  }
`
export const Imagen = styled.div`
  width: 100%;
  height: 100%;
  @media(${tablet}){
    display: flex;
    justify-content: center;
    & img{
      width: 80%;
    }
    
  }
`
