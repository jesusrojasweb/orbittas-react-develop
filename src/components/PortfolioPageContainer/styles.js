import styled, {css, createGlobalStyle} from 'styled-components'
import {Link} from '@reach/router'
import {colorPrincipal, mobile, fuentePrincipal,  tablet} from "../../styles/variables";
import {Margen} from "../../styles/Styles";

export const Body = createGlobalStyle`
  body{
    overflow: hidden;
    @media(${tablet}){
      overflow: scroll;
    }
  }
`

export const Portafolio = styled.section`
  background: ${colorPrincipal};
  position: relative;
`
export const Grid = styled.div`
  ${Margen}
  display: grid;
  grid-template-columns: 3fr 7fr;
  align-items: center;
  grid-gap: 5em;
  padding-bottom: 3em;
  align-self: top;
  z-index: 1000;
  @media(${mobile}){
    grid-template-columns: 1fr;
    height: auto;
    grid-gap: 0;
    padding-top: 6em;
  }
`

export const Item = styled.div`
  z-index: 1000;
`

export const Menu = styled.ul`
  list-style: none;
  width: 100%;
  @media(${mobile}){
    display: flex;
    flex-flow: wrap;
  }
`

export const Anchor = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: ${fuentePrincipal};
  font-size: 1rem;
  transition: .3s;
  display: flex;
  align-items: center;
  @media(${mobile}){
    flex-direction: column;
  }
`
export const Icono = styled.span`
  width: 12%;
  margin: 0 1em 0 .5em;
  @media(${mobile}){
    margin-right: 1em;
    width: 40%;
  }
`
export const ListItem = styled.li`
  margin-bottom: 2em;
  
  background: ${colorPrincipal};
  @media(${mobile}){
    width: 25%;
  }
  ${props => props.activo && css`
    @media(${mobile}){
      width: 100%;
      order: -1;
      & ${Icono}{
        display: none;
      }
      & ${Anchor}{
        flex-direction: row;
        font-size: 1.3rem;
      }
      
    }
  `}
`
