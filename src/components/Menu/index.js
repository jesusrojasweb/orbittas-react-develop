import React, {useState, useEffect} from 'react'
import {Location} from '@reach/router'
import {Idioma,Header, Contenedor, Navbar, MenuList, Item, Logo, Burger, Img, Close} from './styles'
import {onScroll} from '../../hooks/onScroll'
import {FaBars,FaTimes} from 'react-icons/fa'
import {useTranslate} from 'react-translate'

export const Menu = ({index,lang,changeIdioma, idioma,changeProp,propuesta})=>{
  const [scroll, setScroll] = onScroll(mover)
  const [show, setShow] = useState(false)
  let t = useTranslate('menu')
  function mover() {
    const newShowFixed = window.scrollY > 50;
    scroll != newShowFixed && setScroll(newShowFixed)
  }
  function click() {
    // window.scrollBy(0, -window.innerHeight);
    window.scrollBy({
      top: -4000,
      left: 0,
      behaviour: 'smooth'
    })
  }
  console.log(changeProp)

  return(
    <Location>
      {({location})=>(
        <Header scroll={scroll} fondo={location.pathname} index={index} >
          <Contenedor>
            <Navbar>
              <Logo to={`/`} onClick={()=>click()}>  
                <figure><img src="https://jesusrojasweb.github.io/orbittas/img/logo-largo.png" alt="logo"/></figure>
              </Logo>
              <MenuList show={show} onClick={()=> setShow(false)}>
                <Item onClick={()=>click()} to={`/about`}>{t('about')}</Item>
                <Item onClick={()=>click()} to={`/services`}>{t('services')}</Item>
                <Item onClick={()=>click()} to={`/portfolio`}>{t('portfolio')}</Item>
                <Item onClick={()=>click()} to={`/contact`}>{t('contact')}</Item>
                {
                  idioma
                    ? <Idioma onClick={()=> changeIdioma(false)} >
                        ES
                      </Idioma>
                    : <Idioma onClick={()=> changeIdioma(true)} >
                        EN
                      </Idioma>
                }
                <Idioma onClick={()=>{changeProp(1)}}>1</Idioma>
                <Idioma onClick={()=>{changeProp(2)}}>2</Idioma>
                <Idioma onClick={()=>{changeProp(3)}}>3</Idioma>
                <Idioma onClick={()=>{changeProp(4)}}>4</Idioma>
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
