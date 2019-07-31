import React, {useState, useEffect} from 'react'
import {Location} from '@reach/router'
import {Header, Contenedor, Navbar, MenuList, Item, Logo, Burger, Img, Close} from './styles'
import {onScroll} from '../../hooks/onScroll'
import {FaBars,FaTimes} from 'react-icons/fa'


const MenuComponent = ({index})=>{
  const [scroll, setScroll] = onScroll(mover)
  const [show, setShow] = useState(false)
  function mover() {
    const newShowFixed = window.scrollY > 50;
    scroll != newShowFixed && setScroll(newShowFixed)
  }

  return(
    <Location>
      {({location})=>(
        <Header scroll={scroll} fondo={location.pathname} index={index} >
          <Contenedor>
            <Navbar>
              <Logo to="/">  
                <figure><img src="https://jesusrojasweb.github.io/orbittas/img/logo-largo.png" alt="logo"/></figure>
              </Logo>
              <MenuList show={show} onClick={()=> setShow(false)}>
                <Item to="/about">Quienes somos</Item>
                <Item to="/services">Servicios</Item>
                <Item to="/portfolio">Portafolio</Item>
                <Item to="/contact">Contacto</Item>
              </MenuList>
            </Navbar>

            <Burger onClick={()=> setShow(true)}>
              <FaBars/>
            </Burger>
            <Close show={show} onClick={()=> setShow(false)}>
              <FaTimes/>
            </Close>
          </Contenedor>
        </Header>
        
      )}
    </Location>
  )
}

export const Menu = React.memo(MenuComponent,(prevProps, props)=>{
  return prevProps.index === props.index
})
