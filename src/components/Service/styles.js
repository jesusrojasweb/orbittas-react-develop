import styled, {css} from 'styled-components'
import {Margen} from "../../styles/Styles";
import {colorPrincipal, tablet, mobile, fuentePrincipal} from "../../styles/variables";

export const Item = styled.div`
  background: none;
`

export const Grid = styled.div`
  ${Margen}
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5em;
  @media(${tablet}){
    grid-template-columns: 1fr;
    height: auto;
  }
  @media(${mobile}){
    padding-top: 2em;
  }
`
export const Servicio = styled.section`
  background: white;
  ${props => !props.right && css`
    background: #007993;
    background:rgba(0,121,147,.1);
    & ${Grid}{
      @media(${tablet}){
        & ${Item}:first-child{
          grid-row-start: 2;
        }
      }
    }
    & img{
      margin-left: -6em;
      @media(${mobile}){
        margin-left: -3em;
        width: 122%
      }
    }
  `}
  ${props => props.right && css`
    & img{
      margin-left: 6em;
      @media(${mobile}){
        margin-left: 0 !important;
        width: 122%;
      }
    }
  `}
`
export const Head = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2em;
`
export const Icono = styled.div`
  width: 10%;
  margin-right: 2em;
  @media(${mobile}){
    width: 10%;
    margin-right: .5em;
  }
`
export const Nombre = styled.h3`
  color: ${colorPrincipal};
  font-size: 2rem;
  font-family: ${fuentePrincipal};
  @media(${mobile}){
    font-size: 1rem;  
  }
`
export const Lista = styled.ul`
  list-style: none;
  padding-left: 2em;
`
export const ListItem = styled.li`
  padding-bottom: 1em;
  position: relative;
  @media(${mobile}){
    font-size: .8rem;
  }
  &:before{
    content: '';
    width: 20px;
    height: 20px;
    background: ${colorPrincipal};
    left: -2em;
    top: 0;
    position: absolute;
    border-radius: 50%;
  }
`

