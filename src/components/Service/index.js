import React, {Fragment} from 'react'
import {Conexion} from '../Conexion'

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
let contador = 0

export const Service = ({right= true, img = IMAGEN_DEFAULT,imagenServicio, nombre= NOMBRE_DEFAULT, id, idioma, es, en, nombreEn})=>{
  
  let servicios
  idioma ? servicios = en : servicios = es

  const Info = ()=>(
    <Item>
      <Head>
        <Icono>
          <img src={img} alt="nombre"/>
        </Icono>
        {
          idioma
          ? <Nombre>{nombreEn}</Nombre>
          : <Nombre>{nombre}</Nombre>
        }
      </Head>
      <div>
        <Lista grid={servicios.length > 8}>
        {
          servicios.length > 8
          ? <Fragment>
              <div>
                {servicios.slice(0,8).map(servicio =><ListItem key={servicio.id}>{servicio.nombre}</ListItem>)}
              </div>
              <div>
                {servicios.slice(9,servicios.length).map(servicio =><ListItem key={servicio.id}>{servicio.nombre}</ListItem>)}
              </div>
            </Fragment>
          : servicios.map(servicio =><ListItem key={servicio.id}>{servicio.nombre}</ListItem>)
          
        }
        </Lista>
        {
          idioma
          ? <Btn to={`/portfolio?=${id}`}>Go to portfolio</Btn>
          : <Btn to={`/portfolio?=${id}`}>Ir al portafolio</Btn>
        }
        
      </div>
    </Item>
  )

  const ServicioRight = ()=>(
    <Servicio right={right} id={id}>
      <Grid>
        <Info/>
        <Item><Img src={imagenServicio} alt={`${nombre} imagen`}/></Item>
      </Grid>
    </Servicio>
  )
  const ServicioLeft = ()=>(
    <Servicio right={right} id={id}>
      <Grid>
        <Item><Img src={imagenServicio} alt={`${nombre} imagen`}/></Item>
        <Info/>
      </Grid>
      <Conexion/>
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
