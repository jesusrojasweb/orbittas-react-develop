import styled from 'styled-components'
import {Margen} from '../../styles/Styles'
import {colorPrincipal, tituloSecundario, mobile, min} from '../../styles/variables'

export const TestimoniosContainer = styled.section`
  background: white;
  ${Margen}
  padding-top: 4em;
  height: 700px;
  @media(${mobile}){
    height: 875px;
  }
  @media(${min}){
    padding: 2em 2em 6em;
    height: 1300px !important;
  }
`
export const Title = styled.h2`
  color: ${colorPrincipal};
  font-family: ${tituloSecundario};
`

export const Banner = styled.div`
  margin-top: 8em;
  width: 100%;
  display: flex;
  justify-content: center;
  @media(${mobile}){
    margin-top: 5em;
  }
`

export const Container = styled.div`
  position: relative;
  height: 50%;
`

export const Right = styled.button`
  background: ${colorPrincipal};
  position: absolute;
  width: 55px;
  height: 55px;
  right: 7em;
  top: 50%;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: .3s;
  z-index: 20;
  background: none;
  border: 1px solid ${colorPrincipal};
  &:focus{
    outline: none;
  }
  @media(${mobile}){
    right: 0;
  }
`

export const Left = styled.button`
  position: absolute;
  width: 55px;
  height: 55px;
  color: white;
  left: 7em;
  top: 50%;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: .3s;
  z-index: 20;
  background: none;
  border: 1px solid ${colorPrincipal};
  &:focus{
    outline: none;
  }
  @media(${mobile}){
    left: 0;
  }
`

export const Circulo = styled.div`
  background: ${colorPrincipal};
  width: 47.5px;
  height: 47.5px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  margin-left: -3px;
`
