import React, {Fragment} from 'react'

import {Servicio, Item, Grid, Head, Icono, Nombre, Lista, ListItem} from './styles'

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

export const Service = ({right= true, imagen = IMAGEN_DEFAULT, nombre= NOMBRE_DEFAULT, servicios = SERVICIO_DEFAULT, SvgImage, id})=>{
  console.log(IMAGEN_DEFAULT)
  console.log(imagen)
  const ServicioRight = ()=>(
    <Servicio right={right} id={id}>
      <Grid>
        <Item>
          <Head>
            <Icono>
              <SvgImage/>
            </Icono>
            <Nombre>{nombre}</Nombre>
          </Head>
          <div>
            <Lista>
              {servicios.map(servicio =><ListItem key={servicio.id}>{servicio.nombre}</ListItem>
              )}
            </Lista>
          </div>
        </Item>
        {console.log(imagen)}
        <Item><img src={imagen} alt={`${nombre} imagen`}/></Item>
      </Grid>
    </Servicio>
  )
  const ServicioLeft = ()=>(
    <Servicio right={right} id={id}>
      <Grid>
        <Item><img src={imagen} alt={`${nombre} imagen`}/></Item>
        <Item>
          <Head>
            <Icono>
              <SvgImage/>
            </Icono>
            <Nombre>{nombre}</Nombre>
          </Head>
          <div>
            <Lista>
            {servicios.map(servicio =><ListItem key={servicio.id}>{servicio.nombre}</ListItem>
            )}
            </Lista>
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
