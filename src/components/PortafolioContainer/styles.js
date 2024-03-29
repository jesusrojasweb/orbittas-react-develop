import styled, {css} from 'styled-components'
import {tablet, mobile, colorFluerecente} from "../../styles/variables";
import {loaderCircle} from '../../styles/animations'

export const LoaderCircle = styled.div`
  display: inline-block;
  transform: translateZ(1px);
`
export const LoaderCircleItem = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 6px;
  border-radius: 50%;
  background: ${colorFluerecente};
  ${loaderCircle()}
`


export const Proyectos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
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

