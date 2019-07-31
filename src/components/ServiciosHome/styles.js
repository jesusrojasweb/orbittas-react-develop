import styled from 'styled-components'
import {Margen} from "../../styles/Styles";
import {colorPrincipal, fuenteSecundaria} from "../../styles/variables";

export const Servicios = styled.section`
  align-items: center;
  background: white;
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
`
export const Item = styled.div`
  background: none;
`
export const NombreServicio = styled.h3`
  color: ${colorPrincipal};
  font-family: ${fuenteSecundaria};
`
export const Descripcion = styled.p`
  color: black;
`
