import styled from 'styled-components'
import {palpitar, floating, aparecer,color,escalar} from '../../../styles/animations'

export const Palpitar = styled.path`
  ${palpitar()}
`
export const Floating = styled.path`
  ${floating()}
`
export const Aparecer = styled.circle`
  ${escalar()}
`

export const Color = styled.path`
  ${color()}
`
