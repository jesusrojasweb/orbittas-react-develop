import styled, {css} from 'styled-components'

import { tablet, colorPrincipal, mobile} from "../../styles/variables";
export const SocialesContainer = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  margin-top: 8em;
  flex-direction: column;
  align-items: center;
  ${({fondo})=> fondo && css`
    margin-bottom: 13em;
    @media(${mobile}){
      margin-bottom: 0;
    }
  `}
  @media(${tablet}){
    flex-direction: row;
    margin-top: 0;
    justify-content: space-around;
  }
`

