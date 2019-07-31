import styled from 'styled-components'
import {colorPrincipal} from "../../styles/variables";
import {Margen} from "../../styles/Styles";
import {Link} from "@reach/router";

export const Portafolio = styled.section`
  align-items: center;
  position: relative;
  background: ${colorPrincipal};
`
export const Grid = styled.div`
  ${Margen}
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 2em;
  justify-content: center;
`
export const Proyectos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 2em 3em 2em 0;
  grid-gap: 2em;
`

export const Proyecto = styled(Link)`
  text-align: center;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  color: white;
  text-decoration: none;
  height: 250px;
  overflow: hidden;
  transition: .3s;
  background: #006176;
  border-radius: 5px;
`
export const Nombre = styled.h2`
  z-index: 1000;
  margin: 0;
  color: white;
`
export const Imagen = styled.span`
  z-index: 1000;
`
export const Caracteristicas = styled.span`
  z-index: 1000;
  color: white;
`
