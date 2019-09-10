import styled from 'styled-components'
import {colorPrincipal, fuentePrincipal, colorFluerecente} from '../../styles/variables'

export const FooterContainer = styled.footer`
  background: ${colorPrincipal};
  padding: 4em 6em;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5em;
`

export const Img = styled.img`
  width: 80%;
  align-self: center;
`

export const Title = styled.h3`
  color: white;
  font-family: ${fuentePrincipal};
`

export const Copy = styled.p`
  text-align: center;
  color: white
`

export const Sociales = styled.ul`
  dislay: flex;
  justify-content: space-between;
  flex-direction: row;
  list-style: none;
`
export const Icono = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: .3s;
  &:hover{
    color: ${colorFluerecente};
  }
`
