import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Main";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <Intro />
    </div>
  );
};

export default App;
