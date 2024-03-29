
import React from 'react'
import {useTranslate} from 'react-translate'
import {ParticulasBajo} from '../../PartitulasBajo'

import {Hero, Container, Item, Contenedor, Grid, Icono, Title, Spacing, Ancho, Descripcion} from './styles'
import {HeroProyecto, HeroElec, HeroWeb, HeroMovil} from './Ilustraciones'
import {smoothScroll} from '../../../hooks/smoothScroll'

export const HeroServicios = ({idioma})=>{
  let t = useTranslate('heroServicesPage')

  return(
    <Hero>
      <ParticulasBajo/>
      <Container>
        <Contenedor>
          <Item>
            { idioma
              ?  <Title><Ancho>{t('firstTitle')}</Ancho> <br/> {t('secondTitle')}</Title>
              : <Title><Ancho>{t('firstTitle')}</Ancho><br/> <Spacing>va</Spacing>{t('secondTitle')}</Title>}
          </Item>
          <Item>
            <Descripcion>{t('firstDescription')}</Descripcion>
            <Descripcion>{t('secondDescription')}</Descripcion>
            <Grid>
              <Icono href="#proyecto" onClick={()=> smoothScroll('proyecto',1000)}>
                <HeroProyecto/>
              </Icono>
              <Icono href="#electronica" onClick={()=> smoothScroll('electronica',1000)}>
                <HeroElec/>
              </Icono>
              <Icono href="#web" onClick={()=> smoothScroll('web',1000)}>
                <HeroWeb/>

              </Icono>
              <Icono href="#movil" onClick={()=> smoothScroll('movil',1000)}>
                <HeroMovil/>

              </Icono>
            </Grid>
          </Item>
        </Contenedor>
      </Container>
    </Hero>
  )
}
