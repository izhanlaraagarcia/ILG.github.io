import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./Componentes-Generales/menu.jsx";
import Inicio from "./Home/Inicio.jsx";
import About from "./pages/About/about.jsx";
import Contact from "./pages/Contact/contact.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </Router>
    );
  }
}

export default App;