import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap' 

const BarraNavegacion = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="ligth" variant="dark" style={{backgroundColor: '#EA0000'}}>
        <Container>
        <Navbar.Brand href="#home">Serviexpress</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
          <Nav></Nav>
          <Nav> 
            <Nav.Link href="#features">Cotizar</Nav.Link>
            <Nav.Link href="#pricing">Solicitar servicio</Nav.Link>
            <NavDropdown title="Sobre nosotros" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Quienes somos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Contactanos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#features">iniciar sesion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default BarraNavegacion
