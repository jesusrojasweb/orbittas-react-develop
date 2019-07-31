import styled, {css} from 'styled-components'

const ElecCls2 = ()=> css`
  fill:none;
  stroke:#007993;
  stroke-width:3.46px;
  transition:.3s;
  stroke-linejoin:round
`

export const ProyectPath = styled.path`
  fill:#007993;
  transition:.3s
`
export const ProyectRect = styled.rect`
  fill:#007993;
  transition:.3s
`
export const ElectroCls2Circle = styled.circle`
  ${ElecCls2}
`
export const ElectroCls2Path = styled.path`
  ${ElecCls2}
`
export const ElectroCls3 = styled.rect`
  fill:#007993;
  transition:.3s
`
export const ElectroCls4 = styled.path`
  stroke-miterlimit:10;
  stroke-width:1.28px;
  fill:#bfdedb
`
