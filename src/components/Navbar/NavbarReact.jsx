import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../../assets/images/icons/ia.png';

export default class NavbarReact extends React.Component {


  render(){
    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container>

          <Navbar.Brand href="#home">
          <img src={Logo} alt="" width="40" height="40" className="d-inline-block align-text-center m-2 "></img>
          IA Models
          </Navbar.Brand>
          <Nav className="me-1">
            <Nav.Link href="/inicio">Inicio</Nav.Link>
            <Nav.Link href="/modelos">Modelos</Nav.Link>
            <Nav.Link href="/historial">Historial </Nav.Link>
            <Nav.Link href="/#">Ayuda</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

}