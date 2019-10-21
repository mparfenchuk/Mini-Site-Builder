import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
    font-family: 'IBM Plex Serif', serif;
  }

  body > div {
    height: 100%
  }

  h1, p {
    margin: 0;
  }
`
