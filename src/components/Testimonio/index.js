import React, {Fragment} from 'react'
import {Container, Figure, Descripcion, Nombre, Cargo, Overlay,Relative, Persona,Informacion,Contenedor,Cita} from './styles'

export const Testimonio = ({className, siguiente, anterior, logo, testimonio, persona, cargo, personaProfile, idioma, testimonioEn})=>{
  return(
    <Container className={className}>
      <Relative>
        <Figure profile={personaProfile === ''}>
          <img src={logo} />
        </Figure>
        <Cita>
          {
            (testimonioEn && idioma)
            ? <Descripcion>{testimonioEn}</Descripcion>
            : <Descripcion>{testimonio}</Descripcion>
          }
        </Cita>
        {
          personaProfile === ''
          ? <Fragment>
              <Nombre solo={true}>{persona}</Nombre>
              <Cargo solo={true}>{cargo}</Cargo>
            </Fragment>
          : <Contenedor>
              <Informacion>
                <Persona>
                  <img src={personaProfile}/>
                </Persona>
                <div>
                  <Nombre>{persona}</Nombre>
                  <Cargo>{cargo}</Cargo>
                </div>
              </Informacion>
            </Contenedor>
        }
      </Relative>
    </Container>
  )
}
