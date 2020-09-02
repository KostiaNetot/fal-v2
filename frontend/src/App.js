import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import MainPage from "./containers/main-page/MainPage";

function App() {
  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;
