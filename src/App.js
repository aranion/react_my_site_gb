// import React from 'react';
import "./App.css";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Header/Menu/Menu";
import Main from "./components/Content/Main/Main";

const App = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Menu/>
        <Main/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
