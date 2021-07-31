import React from "react";
import { GamePage } from './pages/game/gamepage.component'


import { createGlobalStyle } from "styled-components";
import { toast } from "react-toastify";
toast.configure();
const App =() => {

  return (
    <>
      <h1>Tetris Marcos Manzo</h1>
      <GamePage />
      <GlobalStyle />
    </>
  );
};
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(white, gray);
    font-family: 'Inconsolata', monospace;
  }
`;

export default App;
