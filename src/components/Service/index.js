import React, {Fragment} from 'react'

import {Servicio, Item, Grid, Head, Icono, Nombre, Lista, ListItem, Img, Btn} from './styles'

const NOMBRE_DEFAULT = 'Gestión de Proyectos'
const IMAGEN_DEFAULT = 'https://jesusrojasweb.github.io/orbittas/img/servicio-proyectos.png'
const SERVICIO_DEFAULT = [
  {
    "id": 1,
    "nombre": "KPIS"
  },
  {
    "id": 2,
    "nombre": "PMI"
  },
  {
    "id": 3,
    "nombre": "PMP"
  },
  {
    "id": 4,
    "nombre": "Agile Methogoly"
  },
  {
    "id": 5,
    "nombre": "Modelamiento y optmización de procesos"
  },
  {
    "id": 6,
    "nombre": "Desarrollo de herramientas genrenciales"
  },
]

export const Service = ({right= true, img = IMAGEN_DEFAULT,imagenServicio, nombre= NOMBRE_DEFAULT, servicios = SERVICIO_DEFAULT, id})=>{
  const ServicioRight = ()=>(
    <Servicio right={right} id={id}>
      <Grid>
        <Item>
          <Head>
            <Icono>
              <img src={img} alt="nombre"/>
            </Icono>
            <Nombre>{nombre}</Nombre>
          </Head>
          <div>
            <Lista>
              {servicios.map(servicio =><ListItem key={servicio.id}>{servicio.nombre}</ListItem>
              )}
            </Lista>
            <Btn to={`/portfolio?=${id}`}>Ir al portafolio</Btn>
          </div>
        </Item>
        <Item><Img src={imagenServicio} alt={`${nombre} imagen`}/></Item>
      </Grid>
    </Servicio>
  )
  const ServicioLeft = ()=>(
    <Servicio right={right} id={id}>
      <Grid>
        <Item><Img src={imagenServicio} alt={`${nombre} imagen`}/></Item>
        <Item>
          <Head>
            <Icono>
              <img src={img} alt="nombre"/>
            </Icono>
            <Nombre>{nombre}</Nombre>
          </Head>
          <div>
            <Lista>
            {servicios.map(servicio =><ListItem key={servicio.id}>{servicio.nombre}</ListItem>
            )}
            </Lista>
            <Btn to={`/portfolio?=${id}`}>Ir al portafolio</Btn>
          </div>
        </Item>
      </Grid>
    </Servicio>
  )
  return(
    <Fragment>
      {

        right
          ? <ServicioRight/>
          : <ServicioLeft/>
      }
      
    </Fragment>
  )
}
