
import './App.scss';

//Rutas
// import { BrowserRouter as Router } from "react-router-dom";
// import { Routes, Route } from "react-router";

//Components
import NavbarReact from './components/Navbar/NavbarReact';
import FooterReact from './components/Footer/FooterReact';

function App() {
  return (
    <div className="App">
       <NavbarReact />

       <FooterReact />

       
    </div>
  );
}

export default App;
