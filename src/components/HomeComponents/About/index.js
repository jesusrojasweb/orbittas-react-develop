import React from 'react'
import {Equipo,Calidad, Eficiencia, Soluciones} from './Ilustraciones'
import {ImageRotate ,About, Btn, Item, Cualidad, Cualidades, CualidadNombre, Descripcion, Grid, Icono, Imagen, Contenedor} from './styles'
import {ParticulasFondo} from '../../ParticulasFondo'

export const AboutHome =()=>(
  <About>
    <ParticulasFondo/>
    <Grid>
      <Item>
        <Contenedor>
          <Descripcion>Somos un equipo apasionado por la tecnología e innovación, conformado por
            profesionales en diversas áreas.</Descripcion>
          <Descripcion>Nos centramos en el comportamiento fluido y adaptable, trascendiendo fronteras,
            manteniendo relación cercana con nuestros clientes para lograr una sinergia perfecta, en la que se disfrute
            el proceso y se obtenga el resultado por encima de los estándares</Descripcion>
          <Cualidades>
            <Cualidad>
              <Icono>
                <Equipo/>
              </Icono>
                <CualidadNombre>Equipo Experto</CualidadNombre>
            </Cualidad>
            <Cualidad>
              <Icono>
                <Calidad/>
              </Icono>
              <CualidadNombre>Alta Calidad de los productos</CualidadNombre>
            </Cualidad>
            <Cualidad>
              <Icono>
                <Eficiencia/>
              </Icono>
              <CualidadNombre>Eficiencia de entrega</CualidadNombre>
            </Cualidad>
            <Cualidad>
              <Icono>
                <Soluciones/>
              </Icono>
              <CualidadNombre>Soluciones precisas</CualidadNombre>
            </Cualidad>

          </Cualidades>
        </Contenedor>
        <Imagen>
          <img src="https://jesusrojasweb.github.io/orbittas/img/quienes.png" alt=""/>
          <ImageRotate src="https://jesusrojasweb.github.io/orbittas/img/somos.png" alt=""/>
        </Imagen>
      </Item>
      <Item>
        <Btn to="/about">Conocenos</Btn>
      </Item>
    </Grid>
  </About>
)
