import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegram} from "react-icons/fa";
import {FooterContainer, Grid, Item, Title, Img, Copy, Sociales, Icono} from './styles'

export const Footer = ()=>{
  return(
    <FooterContainer>
      <Grid>
        <div>
          <Img src="https://firebasestorage.googleapis.com/v0/b/pagina-oribttas.appspot.com/o/files%2Flogo-emblema.png?alt=media&token=14d3d373-8259-4f5d-85f2-fdbaddb71cd7" alt="logo con emblema"/>
        </div>
        <div>
          <Title>Información</Title>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <Title>Redes Sociales</Title>
          <Sociales>
            <li>
              <Icono href="#"><FaFacebook/></Icono>
            </li>
            <li>
              <Icono href="#"><FaInstagram/></Icono>
            </li>
            <li>
              <Icono href="#"><FaWhatsapp/></Icono>
            </li>
          </Sociales>
        </div>
      </Grid>
      <Copy>&copy; Copyright Todos los derechos reservados</Copy>
    </FooterContainer>
  )
}
