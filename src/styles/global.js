import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {

    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline:0;
  }

  html, body, #root {
    min-height: 100%;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }
`;