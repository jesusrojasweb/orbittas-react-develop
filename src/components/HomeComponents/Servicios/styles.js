import styled from 'styled-components'
import {Margen} from "../../../styles/Styles";
import {Link} from "@reach/router";
import {colorPrincipal, fuenteSecundaria, mobile, tablet} from "../../../styles/variables";

export const Servicios = styled.section`
  align-items: center;
  background: white;
  @media(${mobile}){
    height: auto;
  }
`
export const Head = styled(Link)`
  @media(${mobile}){
    grid-area: 2 / 2 / 3 / 3;
  }
`

export const Item = styled.div`
  @media(${mobile}){
    display: grid;
    text-align: left;
    flex-direction: row-reverse;
    grid-template-columns: 2fr 1fr;
    grid-gap: 0 2em;
  }
`
export const Grid = styled.div`
  ${Margen}
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 5em;
  text-align: center;
  position: relative;
  padding-top:4em;
  padding-right: 9em;
  align-items: center;
  @media(${tablet}){
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em 8em;
    & ${Item}{
      margin-top: 0 !important;
    }
  }
  @media(${mobile}){
    height: auto;
    grid-template-columns: 1fr !important;
    padding-top: 2em !important;
  }
`

export const NombreServicio = styled.h3`
  color: ${colorPrincipal};
  font-family: ${fuenteSecundaria};
  @media(${mobile}){
    grid-column: 2 span;
  }
`
export const Descripcion = styled.p`
  color: black;
`
