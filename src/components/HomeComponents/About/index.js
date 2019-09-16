import React from 'react'
import {Equipo,Calidad, Eficiencia, Soluciones} from './Ilustraciones'
import {ImageRotate ,About, Btn, Item, Cualidad, Cualidades, CualidadNombre, Descripcion, Grid, Icono, Imagen, 
  Contenedor, Title,Img} from './styles'
import {useTranslate} from 'react-translate'
import {ParticulasBajo} from '../../PartitulasBajo'
import {Conexion} from '../../Conexion'

export const AboutHome =()=>{
  let t = useTranslate('aboutHomePage')
  return(
      <About>
        <ParticulasBajo/>
        <Grid>
          <Title>Conoce nuestro equipo:</Title>
          <Item>
            <Contenedor>
              <Descripcion>{t('firstParagraph')}</Descripcion>
              <Descripcion>{t('secondParagraph')}</Descripcion>
              <Cualidades>
                <Cualidad>
                  <Icono>
                    <Equipo/>
                  </Icono>
                    <CualidadNombre>{t('expert')} </CualidadNombre>
                </Cualidad>
                <Cualidad>
                  <Icono>
                    <Calidad/>
                  </Icono>
                  <CualidadNombre>{t('quality')} </CualidadNombre>
                </Cualidad>
                <Cualidad>
                  <Icono>
                    <Eficiencia/>
                  </Icono>
                  <CualidadNombre>{t('efficiency')} </CualidadNombre>
                </Cualidad>
                <Cualidad>
                  <Icono>
                    <Soluciones/>
                  </Icono>
                  <CualidadNombre>{t('solutions')} </CualidadNombre>
                </Cualidad>
  
              </Cualidades>
            </Contenedor>
            <Imagen>
              <Img src="https://firebasestorage.googleapis.com/v0/b/pagina-oribttas.appspot.com/o/files%2Fquienes-somos.png?alt=media&token=2b1c74a4-c340-46c7-bcec-e9cfa6e12410" alt=""/>
              <ImageRotate src="https://jesusrojasweb.github.io/orbittas/img/somos.png" alt=""/>
            </Imagen>
          </Item>
          <Item>
            <Btn to={`/about`}>{t('button')} </Btn>
          </Item>
        </Grid>
        <Conexion/>
      </About>
    )
  }
