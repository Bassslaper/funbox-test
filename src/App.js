import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 5e-05) 49.88%, rgba(0, 0, 0, 0.5) 100%), url('./image/bg/bg.png');
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;  
    z-index: 1;
  }


@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
 only screen and (min-moz-device-pixel-ratio: 1.5),
 only screen and (min-resolution: 240dpi) {
 body {
 background: url('./image/bg/bg@2x.png');

 }
}

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, p {
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <div className="App">

      </div>
    </div>
  );
}

export default App;
