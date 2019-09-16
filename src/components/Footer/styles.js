import styled from 'styled-components'
import {colorPrincipal, fuentePrincipal, colorFluerecente, mobile} from '../../styles/variables'

export const FooterContainer = styled.footer`
  background: ${colorPrincipal};
  padding: 2em 6em 1em;
  @media(${mobile}){
    padding: 2em 2em 1em;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5em;
  justify-items: center;
  @media(${mobile}){
    grid-gap: 2em;
    grid-template-columns: 1fr;
  }
`

export const Item = styled.div`
  display: flex;
  justify-content: center;
`

export const Img = styled.img`
  width: 70%;
  align-self: center;
  @media(${mobile}){
    margin: 0 auto;
  }
`

export const Title = styled.h3`
  color: white;
  font-family: ${fuentePrincipal};
`

export const Copy = styled.p`
  text-align: center;
  color: white;
  margin-top: 2em;
`

export const Ul = styled.ul`
  margin-top: 2em;
`

export const Li = styled.li`
  color:white;
  list-style: none;
  margin-top: .5em;
  & svg{
    margin-right: 1em;
  }
`

export const Sociales = styled.ul`
  display: flex;
  justify-content: start;
  flex-direction: row;
  list-style: none;
  margin-top: 2em;
  @media(${mobile}){
    justify-content: space-between;
  }
`
export const Icono = styled.a`
  color: white;
  font-size: 2.5rem;
  transition: .3s;
  margin-right: 1.5em;
  @media(${mobile}){
    margin: 0;
  }
  
  &:hover{
    color: ${colorFluerecente};
  }
`
