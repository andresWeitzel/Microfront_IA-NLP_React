
import './App.css';

//Rutas
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";

//Components
import NavbarReact from './components/NavbarReact';

function App() {
  return (
    <div className="App">
       <NavbarReact />
    </div>
  );
}

export default App;
