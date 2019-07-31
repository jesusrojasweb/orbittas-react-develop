import React from 'react'
import {Empatia, Pasion, Focus, Equipo} from './Ilustraciones'
import {Valores, Grid, Item, Head, Valor, Descripcion} from './styles'

export const ValoresAbout = ()=>(
  <Valores>
    <Grid>
      <Item>
        <Head>
          <Empatia/>
        </Head>
        <Valor>Empatia</Valor>
        <Descripcion>Generamos ambiente de confianza, nos conectamo contigo para entender tu negocio y necesidades.</Descripcion>
        
      </Item>
      <Item>
        <Head>
          <Pasion/>
        </Head>
        <Valor>Pasión</Valor>
        <Descripcion>Creemos que el éxito de un proyecto, radica en creer en él y apostar con plenitud por hacerlo realidad.</Descripcion>
        
      </Item>
      <Item>
        <Head>
          <Focus/>
        </Head>
        <Valor>Enfoque</Valor>
        <Descripcion>Mantenemos objetivos claros y los esfuerzos totalmente direccionados a cumplirlos con éxito.</Descripcion>
        
      </Item>
      <Item>
        <Head>
          <Equipo/>
        </Head>
        <Valor>Equipo</Valor>
        <Descripcion>Nos adaptamos a las comunicaciones efectivas que facilitan los procesos y avances cooperativos. </Descripcion>
        
      </Item>
    </Grid>
  </Valores>
)
