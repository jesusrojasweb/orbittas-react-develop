import styled, {css} from 'styled-components'
import {tablet, mobile  } from "../../styles/variables";

export const Proyectos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 2em 3em 2em 0;
  grid-gap: 2em;
  @media(${tablet}){
    grid-template-columns: 1fr;
  }
  @media(${mobile}){
    margin-right: 0;
    grid-template-columns: 1fr 1fr !important;;
  }
  ${({pagina}) => pagina && css`
    margin: inherit;
    grid-template-columns: repeat(3,1fr);
    align-self: start;
    overflow: hidden scroll;
    height: 100%;
    padding-right: 1em;
    z-index: 800;
    @media(${mobile}){
      padding-right: 0;
    }
    &::-webkit-scrollbar{
      width: 7px;
      margin-left: 1em;
    }
    &::-webkit-scrollbar-thumb{

      background: white;
      border-radius: 5px;

    }
  `}
`
