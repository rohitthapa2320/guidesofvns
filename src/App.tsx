import React from 'react';

import "./App.css";

import Header from "./components/header/Header";
import Main from "./components/main/Main";

const App = ():JSX.Element => {
  return(
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
