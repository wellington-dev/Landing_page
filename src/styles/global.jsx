import { createGlobalStyle } from "styled-components";
import BackgroundImg from '../assets/BackgroundImg.png'


const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
      font-family: 'Roboto Slab', serif;
      background-repeat: no-repeat;
      background-image:url(${BackgroundImg})
  }
`
export default GlobalStyles