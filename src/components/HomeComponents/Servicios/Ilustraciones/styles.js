import styled from 'styled-components'
import {rotateLeft} from '../../../../styles/animations'

// export const Path = styled.path`
//   ${rotateLeft()}
// `


export const Container = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
`

export const Circulo = styled.img`
  position: absolute; 
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  ${rotateLeft()}
`

export const Imagen = styled.img`
  position: absolute; 
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  transform: scale(0.8);
  transform-origin: 50%;
`
