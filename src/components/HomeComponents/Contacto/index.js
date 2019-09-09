import React from 'react'
import {Escucha, Compania, Ejecuta, Estudio, Planea} from "./Ilustraciones";
import {IconosItem ,Contacto, Btn, Caracteristica, Grid, Descripcion, Icono,
  Copy, Animanos, Footer, GridItem, Iconos, Info, Informacion, Tiptext, Tooltip, Boton} from "./styles";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegram,FaRegEnvelope,FaMobileAlt} from "react-icons/fa";
import {useTranslate} from 'react-translate'
import {Sociales} from '../../Sociales'

export const ContactoHome = ()=> {
  const c = useTranslate('contactHomePage')
  const r = useTranslate('copyRight')
  return(
    <Contacto>
      <Grid>
        <GridItem>
          <Animanos>{c('title')}</Animanos>
          <Iconos>
            <IconosItem>
              <Icono>
                <Escucha/>
              </Icono>
              <Caracteristica>
                <Descripcion>{c('listen')}</Descripcion>
              </Caracteristica>
            </IconosItem>
            <IconosItem>
              <Icono>
                <Estudio/>
              </Icono>
              <Caracteristica>
                <Descripcion>{c('research')}</Descripcion>
              </Caracteristica>
            </IconosItem>
            <IconosItem>
              <Icono>
                <Ejecuta/>
              </Icono>
              <Caracteristica>
                <Descripcion>{c('plan')}</Descripcion>
              </Caracteristica>
            </IconosItem>
            <IconosItem>
              <Icono>
                <Compania/>
              </Icono>
              <Caracteristica>
                <Descripcion>{c('together')}</Descripcion>
              </Caracteristica>
            </IconosItem>
          </Iconos>
          <Informacion>
            <Info>
              <li> <FaRegEnvelope/> info@orbittas.com</li>
            </Info>
            <Boton>
              <Btn to={`/contact`}>{c('button')}</Btn>
            </Boton>
            <Info>
              <li> <FaMobileAlt/> +57 302 2457991</li>
            </Info>
          </Informacion>
        </GridItem>
        <GridItem>
          <Sociales/>
        </GridItem>
        <Footer>
          <Copy>&copy; Copyright {r('copy')}</Copy>
        </Footer>
      </Grid>
    </Contacto>
  )
}
