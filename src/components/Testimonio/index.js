import React from 'react'
import {Container, Figure, Descripcion, Nombre, Cargo, Overlay,Relative} from './styles'

export const Testimonio = ({className, siguiente, anterior})=>{

  return(
    <Container className={className}>
      <Relative>
        
        <Figure>
          <img src="https://firebasestorage.googleapis.com/v0/b/pagina-oribttas.appspot.com/o/files%2Fp4b.png?alt=media&token=5d04bcb3-44e0-4573-b358-72c7f1c763d9" />
        </Figure>
        <Descripcion>Orbittas, liderado por María Elizabeth, es una empresa que cuenta con el músculo y talento para sacar adelante proyectos complejos de tecnología. Nuestra red social de fútbol que va camino a romper barreras a nivel internacional es una realidad gracias a su arduo y profesional trabajo. Además son asequibles de forma tal que después de desarrollar la herramienta tecnológica solicitada prestan el servicio de mantenimiento, dando soluciones inmediatas a esas situaciones que siempre puede ocurrir! Por otro lado son de ética innegable lo cual genera confianza en ellos como personas y como aliados del negocio!</Descripcion>
        <Nombre>Felipe Sandoval</Nombre>
        <Cargo>Founder, P4B</Cargo>
      </Relative>
    </Container>
  )
}
