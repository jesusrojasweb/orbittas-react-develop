import styled from 'styled-components'
import {colorOscuro, colorFluerecente, colorPrincipal, mobile} from '../../styles/variables'

export const Boton = styled.a`
  background: ${colorOscuro};
  color: white;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 1em;
  bottom: 1em;
  font-size: 2rem;
  z-index: 900;
  border-radius: 50%;
  box-shadow: -2px -2px 20px 0px #02313ca3;
  transition: .3s;
  &:hover{
    border-color: ${colorFluerecente};
    background: ${colorFluerecente};
    color: white;
    box-shadow: 0 0 50px #00b5ff;
  }
  @media(${mobile}){
    right: .25em;
    bottom: .5em;
  }
`
