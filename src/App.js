// import React from 'react';
import "./App.css";
import Guess from "./components/Content/Guess/Guess";
import Main from "./components/Content/Main/Main";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Header/Menu/Menu";
import Puzzle from "./components/Content/Puzzle/Puzzle";
import GuessPvP from "./components/GuessPvP/GuessPvP";

const App = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Menu/>
        <Main/>
        <Puzzle/>
        <Guess/>
        <GuessPvP/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
