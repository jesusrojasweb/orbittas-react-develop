import styled, {css} from 'styled-components'
import {loaderCircle} from '../../styles/animations'

export const LoaderCircle = styled.div`
  display: inline-block;
  transform: translateZ(1px);
  width: 100%;
  display: flex;
  justify-content: center;
  height: 70%;
  align-items: center;
`
export const LoaderCircleItem = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 6px;
  border-radius: 50%;
  background: #fff;
  ${loaderCircle()}
`
