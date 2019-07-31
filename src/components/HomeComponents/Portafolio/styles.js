import styled from 'styled-components'
import {colorPrincipal, btn, colorFluerecente} from "../../../styles/variables";
import {Margen} from "../../../styles/Styles";
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
export const Btn = styled(Link)`
  ${btn}
  z-index: 1000;
  margin-right: 3em;
  &:hover{
    border-color: ${colorFluerecente};
    background: ${colorFluerecente};
    color: ${colorPrincipal}
  }
`
