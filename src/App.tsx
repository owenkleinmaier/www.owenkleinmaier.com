import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Main";
import ResumePage from "./components/ResumePage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center">
        <Header />
        {/* Routes to handle different pages */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Main landing page */}
          <Route path="/resume" element={<ResumePage />} /> {/* Resume page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
