import styled, {css} from 'styled-components'
import {colorFluerecente ,colorPrincipal, colorSecundario,fuenteSecundaria, mobile, tablet, fuentePrincipal, btn} from "../../styles/variables";
import {Margen} from "../../styles/Styles";

const inputStyle = ()=> css`
  background: none;
  border: none;
  font-family: ${fuenteSecundaria};
  padding: 1em;
  transition: .3s;
  background: white;
  color: ${colorSecundario};
  border-radius: 5px;
  &::placeholder{
    color:#009270;
    color:rgba(0,146,112,.5);
  }
  &:focus{
    border-color: white;
    outline: none;
  }
`

export const Contacto = styled.section`
  overflow: hidden;
  background: ${colorPrincipal};
  @media(${mobile}){
    height: auto;
  }
`
export const Grid = styled.div`
  ${Margen}
  display: grid;
  grid-template-columns: 1fr 50px;
  grid-gap: 0 2em;
  padding-bottom: 0;
  position: relative;
  padding-top: 8em;
  height: 100vh;
  @media(${tablet}){
    grid-template-columns: 1fr;
    height: auto;
  }
`

export const Animanos = styled.h1`
  color: white;
  font-family: ${fuentePrincipal};
  font-size: 3rem;
  @media(${mobile}){
    font-size: 2rem;
  }
`

export const Item = styled.div`
  align-self: center;
  margin-bottom: 8em;
  &:first-child{
    align-self: center;
    margin-bottom: 8em;
  }
  @media(${mobile}){
    margin-bottom: 4em;  
  }
`
export const Sociales = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  margin-top: 8em;
  flex-direction: column;
  align-items: center;
  @media(${tablet}){
    flex-direction: row;
    margin-top: 0;
    justify-content: space-around;
  }
`
export const Tiptext = styled.span`
  visibility: hidden;
  background: black;
  color: white;
  text-align: center;
  border-radius: 5px;
  padding: 6px 1em;
  position: absolute;
  z-index: 1;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  top: -9px;
  right: 125%;
  font-size: 1rem;
  opacity: 0;
  transition: .3s;
  width: 8em
`

export const Tooltip = styled.a`
  color: white;
  font-size: 2.5rem;
  position: relative;
  &:hover ${Tiptext}{
    visibility: visible;
    opacity: 1;
  }
`

export const Formulario = styled.form`
  width: 93%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 2em;
  margin: 0;
  padding: 0;
  @media(${mobile}){
    grid-template-columns: 1fr;  
  }
`
export const TextArea = styled.textarea`
  ${inputStyle}
  grid-row: 1 / 3;
  grid-column: 5/7;
  border: 2px solid white;
  @media(${mobile}){
    grid-column: 1/2;
    grid-row: 4;
  }
`
export const InputName = styled.input`
${inputStyle}
  grid-column: 2 span;
  @media(${mobile}){
    grid-column: 1 span;
  }
`
export const InputEmail = styled.input`
  ${inputStyle}
  width: 70%;
`
export const FileUpload = styled.label`
  background: none;
  cursor: pointer;
  border: none;

`

export const Linea = styled.div`
  grid-column: 1/4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(${mobile}){
    grid-column: 1/ 2;
  }
`
export const Span = styled.span`
  color: white;
  font-size: 1.5rem;
`
export const InputFile = styled.input`
  display none;
`

export const Btn = styled.button`
  ${btn()}
  background: none;
  z-index: 900;
  &:hover{
    border-color: ${colorFluerecente};
    background: ${colorFluerecente};
    color: ${colorPrincipal};
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-content: center;
  grid-column: 2 span;
  background: white;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 1em;
  box-sizing: border-box;
`
export const Copy = styled.p`
  display: flex;
  justify-content: center;
  color: ${colorPrincipal};
  margin: 0;
`

