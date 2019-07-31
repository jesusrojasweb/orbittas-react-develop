import React from 'react'
import {Escucha, Compania, Ejecuta, Estudio, Planea} from "./Ilustraciones";
import {IconosItem ,Contacto, Btn, Caracteristica, Grid, Descripcion, Icono,
  Copy, Animanos, Footer, GridItem, Iconos, Info, Informacion, Sociales, Tiptext, Tooltip} from "./styles";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegram} from "react-icons/fa";

export const ContactoHome = ()=> (
  <Contacto>
    <Grid>
      <GridItem>
        <Animanos>Nuestro equipo experto</Animanos>
        <Iconos>
          <IconosItem>
            <Icono>
              <Escucha/>
            </Icono>
            <Caracteristica>
              <Descripcion>Te escucha</Descripcion>
            </Caracteristica>
          </IconosItem>
          <IconosItem>
            <Icono>
              <Estudio/>
            </Icono>
            <Caracteristica>
              <Descripcion>Realiza el estudio</Descripcion>
            </Caracteristica>
          </IconosItem>
          <IconosItem>
            <Icono>
              <Planea/>
            </Icono>
            <Caracteristica>
              <Descripcion>Planea el desarrollo</Descripcion>
            </Caracteristica>
          </IconosItem>
          <IconosItem>
            <Icono>
              <Ejecuta/>
            </Icono>
            <Caracteristica>
              <Descripcion>Ejecuta el plan</Descripcion>
            </Caracteristica>
          </IconosItem>
          <IconosItem>
            <Icono>
              <Compania/>
            </Icono>
            <Caracteristica>
              <Descripcion>Te acompaña en la implementación</Descripcion>
            </Caracteristica>
          </IconosItem>
        </Iconos>
        <div className="boton">
          <Btn to="/contact">Contactanos</Btn>
        </div>
        <Informacion>
          <Info>
            <li>Email</li>
            <li>info@orbittas.com</li>
          </Info>
          <Info>
            <li>Telefono</li>
            <li>+57 302 2457991</li>
          </Info>
        </Informacion>
      </GridItem>
      <GridItem>
        <Sociales>
          <li><Tooltip href="#">
            <Tiptext>/orbittas</Tiptext>
            <FaFacebook/> </Tooltip></li>
          <li className="item"><Tooltip href="#">
            <Tiptext>@orbittas</Tiptext><FaInstagram/> </Tooltip></li>
          <li className="item"><Tooltip href="#"><Tiptext>+57 302 2457991</Tiptext>
          <FaWhatsapp/> </Tooltip></li>
          <li className="item"><Tooltip href="#"><Tiptext>+57 302 2457991</Tiptext> <FaTelegram/> </Tooltip></li>
        </Sociales>
      </GridItem>
      <Footer>
        <Copy>&copy; Copyright Todos los derechos reservados</Copy>
      </Footer>
    </Grid>
  </Contacto>
)
