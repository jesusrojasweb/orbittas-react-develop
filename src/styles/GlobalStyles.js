import {createGlobalStyle} from 'styled-components'
import {fuenteSecundaria} from './variables'

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: ${fuenteSecundaria};
    margin: 0;
    padding: 0;
    position: relative;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 10px;
      background: white;
    }
    &::-webkit-scrollbar-thumb{
      background: #004958;
      border-radius: 5px;
    }
  }
  img{
    width: 100%;
  }
  ul,figure{
    margin: 0;
    padding: 0;
  }
`
