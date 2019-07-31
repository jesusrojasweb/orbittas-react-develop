import React from 'react'
import {Equipo, Contenedor, Title, Grid, Item, Anchor, Head, Body, Nombre, Cargo, Hover} from './styles'
import { FaLinkedin} from "react-icons/fa";

export const EquipoAbout = ()=>(
  <Equipo>
    <Contenedor>
      <Title>Nuestro equipo</Title>
      <Grid class="grid">
        <Item>
          <Head>
            <img src="https://jesusrojasweb.github.io/orbittas/img/personal-01.png" alt="persona" class="img"/>
            <Hover>
              <Anchor href="#"><FaLinkedin/></Anchor>
            </Hover>
          </Head>
          <Body>
            <Nombre>Maria Elizabeth Perez Rojas</Nombre>
            <Cargo>CEO</Cargo>
          </Body>
        </Item>
        <Item>
          <Head>
            <img src="https://jesusrojasweb.github.io/orbittas/img/personal-02.png" alt="persona" class="img"/>
            <Hover>
              <Anchor href="#"><FaLinkedin/></Anchor>
            </Hover>
          </Head>
          <Body>
            <Nombre>Massiel Mendoza</Nombre>
            <Cargo>Directora de proyectos</Cargo>
          </Body>
        </Item>
        <Item>
          <Head>
            <img src="https://jesusrojasweb.github.io/orbittas/img/personal-03.png" alt="persona" class="img"/>
            <Hover>
              <Anchor href="#"><FaLinkedin/></Anchor>
            </Hover>
          </Head>
          <Body>
            <Nombre>Jesús Rojas</Nombre>
            <Cargo>Desarrollador Web</Cargo>
          </Body>
        </Item>
        <Item>
          <Head>
            <img src="https://jesusrojasweb.github.io/orbittas/img/personal-04.png" alt="persona" class="img"/>
            <Hover>
              <Anchor href="#"><FaLinkedin/></Anchor>
            </Hover>
          </Head>
          <Body>
            <Nombre>Mauricio</Nombre>
            <Cargo>Desarrollador Web</Cargo>
          </Body>
        </Item>
        <Item>
          <Head>
            <img src="https://jesusrojasweb.github.io/orbittas/img/personal-05.png" alt="persona" class="img"/>
            <Hover>
              <Anchor href="#"><FaLinkedin/></Anchor>
            </Hover>
          </Head>
          <Body>
            <Nombre>Paola Gonzalez</Nombre>
            <Cargo>Experta en IoT</Cargo>
          </Body>
        </Item>
        <Item>
          <Head>
            <img src="https://jesusrojasweb.github.io/orbittas/img/personal-01.png" alt="persona" class="img"/>
            <Hover>
              <Anchor href="#"><FaLinkedin/></Anchor>
            </Hover>
          </Head>
          <Body>
            <Nombre>Maria Elizabeth Perez Rojas</Nombre>
            <Cargo>CEO</Cargo>
          </Body>
        </Item>
        <Item>
          <Head>
            <img src="https://jesusrojasweb.github.io/orbittas/img/personal-02.png" alt="persona" class="img"/>
            <Hover>
              <Anchor href="#"><FaLinkedin/></Anchor>
            </Hover>
          </Head>
          <Body>
            <Nombre>Massiel Mendoza</Nombre>
            <Cargo>Directora de proyectos</Cargo>
          </Body>
        </Item>
        <Item>
          <Head>
            <img src="https://jesusrojasweb.github.io/orbittas/img/personal-03.png" alt="persona" class="img"/>
            <Hover>
              <Anchor href="#"><FaLinkedin/></Anchor>
            </Hover>
          </Head>
          <Body>
            <Nombre>Jesús Rojas</Nombre>
            <Cargo>Desarrollador Web</Cargo>
          </Body>
        </Item>
      </Grid>
    </Contenedor>
  </Equipo>
)
