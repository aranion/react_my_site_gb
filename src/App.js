// import React from 'react';
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Header/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
