import styled, {css} from 'styled-components'
import {Link} from '@reach/router'
import {fuentePrincipal,colorPrincipal, tablet, mobile} from '../../styles/variables'


export const Contenedor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: calc(100% - 12em);
  box-sizing: border-box;
  z-index: 1200;
  position: relative;
  max-width: 1420px;
  @media(${mobile}){
    width: calc(100% - 5em);
  }
`
export const Item = styled(Link)`
  text-decoration: none;
  font-family: ${fuentePrincipal};
  text-transform: uppercase;
  color: ${colorPrincipal};
  font-size: 1.1rem;
  margin-left: 2em;
  transition: .3s;
  &[aria-current]{
     position: relative;
    &:after{
      position: absolute;
      content: '';
      height: 2px;
      width: 100%;
      bottom: -5px;
      left: 0;
      background: ${colorPrincipal};
      transition: .3s;
    }
  }
`
export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const MenuList = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  transition: 1s;

  @media(${tablet}){
    position: fixed;
    left: 0;
    width: 100% !important;
    margin: 0 !important;
    height: 100vh;
    background:#007993;
    background:rgba(0,121,147,.9);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & ${Item}{
      color: white;
      font-size: 2rem;
      margin: 1em 0;
    }
    &:nth-of-type(1){
      top: -200%;
    }
    ${({show}) => show && css`
      top: 0 !important;
    `}
  }
`
export const Logo = styled(Link)`
  width: 15%;
  transition: .3s;
  @media(${mobile}){
    width: 40%;
  }
`
export const Burger = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  transition: 1.2s;
  color: ${colorPrincipal};
  font-size: 1.5rem;
  &:focus{
    outline: none;
  }
  @media(${tablet}){
    display: block;
  }
`
export const Img = styled.img`
  width: 2rem;
`
export const Close = styled.button`
  background: none;
  border: none;
  position: absolute;
  color: white;
  font-size: 2.5rem;
  right: 0;
  visibility: hidden;
  ${({show})=> show && css`
    visibility: visible;
  `}
`

export const Header = styled.header`
  padding: 3em 0;
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1001;
  transition: .3s;
  @media(${mobile}){
    padding: 2em 0;
  }
  ${({index}) => index && css`
    z-index: 900;
  `}
  ${({scroll}) => scroll && css`
    background: white;
    padding: .5em 0;
    @media(${mobile}){
      padding: .8em 0;
    }
    & ${Logo}{
      width: 10%;
      @media(${mobile}){
        width: 30%;
      }
    }
    & ${Item}{
      font-size: 1rem;
    }
    & ${Burger} {
      font-size: 1rem;
    }
  `}
  ${({fondo, scroll}) => ((fondo != '/') && !scroll  ) && css`
    & ${Contenedor}{
      & ${Navbar}{
        & ${MenuList}{
          filter: brightness(0) invert(1);
          @media(${tablet}){
            filter: none;
            background:#fff;
            background:hsla(0,0%,100%,.9);
            & ${Item}{
              color: ${colorPrincipal};
            } 
          }
        }
        & ${Logo}{
          filter: brightness(0) invert(1);  
        }
      }
      & ${Burger}{
        filter: brightness(0) invert(1);
      }
      & ${Close}{
        @media(${tablet}){
          color: ${colorPrincipal};
        }
      }
    }
  ` }
`
