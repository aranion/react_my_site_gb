// import React from 'react';
import "./App.css";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Header/Menu/Menu";
import Main from "./components/Content/Main/Main";
import Puzzle from "./components/Content/Puzzle/Puzzle";
import Guess from "./components/Content/Guess/Guess";
import GuessPvP from "./components/Content/GuessPvP/GuessPvP";
import Password from "./components/Content/Password/Password";
import WorkedOut from "./components/Content/WorkedOut/WorkedOut";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="content">
          <Menu />
          <Route path='/main' component={Main} />
          <Route path='/puzzle' component={Puzzle} />
          <Route path='/guess' component={Guess} />
          <Route path='/guessPvP' component={GuessPvP} />
          <Route path='/passwordGeneration' component={Password} />
          <Route path='/timeWorkedOut' component={WorkedOut} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
