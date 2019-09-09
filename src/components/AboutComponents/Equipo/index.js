import React from 'react'
import {Equipo, Contenedor, Title, Grid, Item, Anchor, Head, Body, Nombre, Cargo, Hover, Red} from './styles'
import { FaLinkedin} from "react-icons/fa";

const equipo = [
  
  {
    "img": "https://jesusrojasweb.github.io/orbittas/img/equipo-normal.jpg",
    "hover": "https://jesusrojasweb.github.io/orbittas/img/equipo-hover.jpg",
    "name": "Nombre Apellido",
    "cargo": "Este es el cargo",
    "linkedin": "#"
  },
  {
    "img": "https://jesusrojasweb.github.io/orbittas/img/equipo-normal.jpg",
    "hover": "https://jesusrojasweb.github.io/orbittas/img/equipo-hover.jpg",
    "name": "Nombre Apellido",
    "cargo": "Este es el cargo",
    "linkedin": "#"
  },
  {
    "img": "https://jesusrojasweb.github.io/orbittas/img/equipo-normal.jpg",
    "hover": "https://jesusrojasweb.github.io/orbittas/img/equipo-hover.jpg",
    "name": "Nombre Apellido",
    "cargo": "Este es el cargo",
    "linkedin": "#"
  },
  {
    "img": "https://jesusrojasweb.github.io/orbittas/img/equipo-normal.jpg",
    "hover": "https://jesusrojasweb.github.io/orbittas/img/equipo-hover.jpg",
    "name": "Nombre Apellido",
    "cargo": "Este es el cargo",
    "linkedin": "#"
  },
  {
    "img": "https://jesusrojasweb.github.io/orbittas/img/equipo-normal.jpg",
    "hover": "https://jesusrojasweb.github.io/orbittas/img/equipo-hover.jpg",
    "name": "Nombre Apellido",
    "cargo": "Este es el cargo",
    "linkedin": "#"
  },
  {
    "img": "https://jesusrojasweb.github.io/orbittas/img/equipo-normal.jpg",
    "hover": "https://jesusrojasweb.github.io/orbittas/img/equipo-hover.jpg",
    "name": "Nombre Apellido",
    "cargo": "Este es el cargo",
    "linkedin": "#"
  },
  {
    "img": "https://jesusrojasweb.github.io/orbittas/img/equipo-normal.jpg",
    "hover": "https://jesusrojasweb.github.io/orbittas/img/equipo-hover.jpg",
    "name": "Nombre Apellido",
    "cargo": "Este es el cargo",
    "linkedin": "#"
  },
  {
    "img": "https://jesusrojasweb.github.io/orbittas/img/equipo-normal.jpg",
    "hover": "https://jesusrojasweb.github.io/orbittas/img/equipo-hover.jpg",
    "name": "Nombre Apellido",
    "cargo": "Este es el cargo",
    "linkedin": "#"
  },
]
let contador = 0;

export const EquipoAbout = ()=>(
  <Equipo>
    <Contenedor>
      <Title>Nuestro equipo</Title>
      <Grid class="grid">
      {
        equipo.map(equipo => <Item>
            <Head>
              <img src={equipo.img} alt="persona"/>
              <Red>
                <Anchor href={equipo.linkedin} target="_blank" ><FaLinkedin/></Anchor>
              </Red>
              <Hover>
                <img src={equipo.hover} alt="persona" class="img"/>
              </Hover>
            </Head>
            <Body>
              <Nombre>{equipo.name}</Nombre>
              <Cargo>{equipo.cargo}</Cargo>
            </Body>
          </Item>
        )
      }
      </Grid>
    </Contenedor>
  </Equipo>
)
