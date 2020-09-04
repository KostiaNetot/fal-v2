import React, {useEffect, useState} from 'react';
import Header from "../../components/header/Header";
import {pathNames} from "./pathNames";

const MainPage = () => {

  const [path, setPath] = useState(pathNames[0].src);

  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div>
      <Header/>
      <main className="main-page-wrapper">
        <img src={require(`./img/main-1.jpg`)} alt="main-1.jpg"/>
        <div className="main-page-content">
          <h1>Follow our line - the<br/> Fresh Arts Line</h1>
          <a href="#" className="btn">Записаться в академию</a>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
