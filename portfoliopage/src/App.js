import React from 'react';
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome/index";
import './App.css';

function App() {
  return (
    <div>
      <Welcome />
      <header>
        <Navbar />
      </header>
      
    </div>
  );
}

export default App;
