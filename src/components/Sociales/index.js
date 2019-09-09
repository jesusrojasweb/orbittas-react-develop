import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegram} from "react-icons/fa";
import {SocialesContainer} from './styles'
import {Tooltip} from '../Tooltip'

export const Sociales = ({fondo})=>{
  return(
     <SocialesContainer fondo={fondo}>
      <li><Tooltip fondo={fondo} href="https://www.facebook.com/orbittas" target="_blank" tiptext="/orbittas"><FaFacebook/></Tooltip></li>
      <li><Tooltip fondo={fondo} tiptext="@orbittas" href="https://www.instagram.com/orbittas/" target="_blank"><FaInstagram/> </Tooltip></li>
      <li><Tooltip fondo={fondo} href="http://consultas.orbittas.com" target="_blank" tiptext="+57 302 2457991"><FaWhatsapp/> </Tooltip></li>
      {/*<li><Tooltip href="#" target="_blank"><Tiptext></Tiptext> <FaTelegram/> </Tooltip></li>*/}
    </SocialesContainer>
  )
}
