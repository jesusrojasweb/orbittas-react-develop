import {css,keyframes} from 'styled-components'
import {colorFluerecente} from './variables'

const floatingKeyframes = keyframes`
  0% {
    transform: translateY(-1%);  
  }
  50% {
    transform: translateY(1%);  
  }  
  100% {
    transform: translateY(-1%);
  }  
`
const rotateLeftKeyframes = keyframes`
  0%{
    transform: rotate(360deg);
  }
  100%{
    transform: rotate(0deg);
  }
`
const floatingLeftKeyframes = keyframes`
  0% {
    transform: translateX(-1%);  
  }
  50% {
    transform: translateX(1%);  
  }  
  100% {
    transform: translateX(-1%);
  }  
`
const tossingtKeyframes = keyframes`
  0% {
    transform: rotate(-4deg);  
  }
  50% {
    transform: rotate(4deg);
  }
  100% {
    transform: rotate(-4deg);  
  }  
`
const aparecerKeyframes = keyframes`
  0%{
    transform: translateY(0px);
  }
  25%{
    transform: translateY(0px);
  }
  100%{
    transform: translateY(100%);
  } 
`
const pulseKeyframes = keyframes`
  0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }  
  100% {
    transform: scale(0.9);
  }  
`
const palpitarKeyframes = keyframes`
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }  
`
const colorKeyframes = keyframes`
  0% {
    fill: #669da8;
  }
  50% {
    fill: ${colorFluerecente};
  }      
  100% {
    fill: #669da8;
  }
`
const scalarKeyframes = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }  
  100% {
    transform: scale(1);
  }
`
const rotateKeyframes = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`

export const floating = ({time = '1.5s'} = {}) => css`
  animation: ${time} ${floatingKeyframes} infinite;
`

export const rotateLeft = ({time = '50s', timing = 'linear'} = {}) => css`
  animation: ${rotateLeftKeyframes} ${time} ${timing} infinite;
  transform-origin: 50%;
`
export const floatingLeft = ({time = '1.5s'} = {}) => css`
  animation: ${floatingLeftKeyframes} ${time} infinite;
`

export const tossing = ({time = '2s', timing = 'ease-in-out'} = {}) => css`
  animation: ${tossingtKeyframes} ${time} ${timing} infinite;
  transform-origin 50%;
`

export const aparecer = ({time = '1.5s', timing = 'ease-in', direction= 'alternate', transform = ''} = {}) => css`
  animation: ${aparecerKeyframes} ${time} ${timing} infinite ${direction};
  transform-origin: ${transform}
`
export const pulse = ({time = '1.5s', timing = '', transform= 'center'} = {}) => css`
  animation: ${pulseKeyframes} ${time} ${timing} infinite;
  transform-origin: ${transform};
`

export const palpitar = ({time = '1.5s'} = {}) => css`
  animation: ${palpitarKeyframes} ${time} infinite;
  transform-origin: 50%;
`

export const color = ({time = '2s'} = {}) => css`
  animation: ${colorKeyframes} ${time} infinite;
`

export const escalar = ({time = '2s', timing = 'ease-out'} = {}) => css`
  animation: ${scalarKeyframes} ${time} ${timing} infinite;
  transform-origin: 50%;
`
export const rotate = ({time = '40s', timing = 'linear'} = {}) => css`
  animation: ${rotateKeyframes} ${time} ${timing} infinite;
  transform-origin: 50%;
`
