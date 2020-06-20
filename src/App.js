import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome/index";
import About from "./components/About/index";
import Projects from "./components/Projects/index";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component= {Welcome} />
        <header>
          <Navbar />
        </header>
        <main>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
        </main>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
