import React from 'react'
import {Contacto, Grid, Animanos, Item, Sociales, Tiptext, Tooltip,
Formulario, TextArea, InputName, InputEmail, FileUpload, Linea, Span,
InputFile, Btn, Footer, Copy} from './styles'
import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegram,FaUpload} from "react-icons/fa";
import {ParticulasBajo} from '../PartitulasBajo'

export const ContactoPage = ()=>{
  return(
    
    <Contacto>
      <Grid>
        <Item>
          <Animanos>Cuentanos tu idea</Animanos>
          <Formulario>
            <InputName type="text" placeholder="Tu Nombre" required=""/>
            <InputName type="text" placeholder="Proyecto" required=""/>
            <Linea>
              <InputEmail type="email" placeholder="Tu Email" required=""/>
              <FileUpload>
                <InputFile type="file"/>
                <Span>
                  <FaUpload/>
                </Span>
              </FileUpload>
            </Linea>
            <TextArea name="" id="" cols="30" rows="4" placeholder="Cuentanos tu idea" required=""></TextArea>
            <div>
              <Btn type="submit" class="btn">Enviar</Btn>
            </div>
            
          </Formulario>
          <ParticulasBajo/>
        </Item>
        <Item>
          <Sociales>
           <li><Tooltip href="#">
             <Tiptext>/orbittas</Tiptext>
             <FaFacebook/> </Tooltip></li>
           <li><Tooltip href="#">
             <Tiptext>@orbittas</Tiptext><FaInstagram/> </Tooltip></li>
           <li><Tooltip href="#"><Tiptext>+57 302 2457991</Tiptext>
           <FaWhatsapp/> </Tooltip></li>
           <li><Tooltip href="#"><Tiptext>+57 302 2457991</Tiptext> <FaTelegram/> </Tooltip></li>
         </Sociales>
        </Item>
        <Footer>
          <Copy>&copy; Copyright Todos los derechos reservados</Copy>
        </Footer>
      </Grid>
    </Contacto>
  )
}  
