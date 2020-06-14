import React from 'react';
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome/index";
import About from "./components/About/index";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div>
      <Welcome />
      <header>
        <Navbar />
      </header>
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
