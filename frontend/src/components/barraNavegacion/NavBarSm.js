import React from 'react'
import {Navbar, Container, Offcanvas, Nav, NavDropdown} from 'react-bootstrap'

import BotonLogin from './BotonLogin'

const NavBarSm = (props) => {
    var text1='';
    var text2='';
    if(props.login) {
    text1='d-none';
    text2='d-block';
    }else{
        text1='d-block';
        text2='d-none';
    }
    return (
        <>
            <Navbar fixed="top" expand={false} bg="ligth" variant="dark" style={{backgroundColor: '#EA0000'}} className='d-block d-lg-none'>
            <Container fluid>
                <Navbar.Brand href="/">Serviexpress</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Menú</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#cotizar">Cotizar</Nav.Link>
                    <Nav.Link href="#solicitar-servicio">Solicitar servicio</Nav.Link>
                    <NavDropdown title="Sobre nosotros" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#quienes-somos">Quienes somos</NavDropdown.Item>
                        <NavDropdown.Item href="#contactanos">Contactanos</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                        <Container className = {text1}>
                            <BotonLogin/>
                        </Container>
                        <NavDropdown title="Mi cuenta" id="collasible-nav-dropdown" className = {text2} >
                        <NavDropdown.Item href="/pedidos">Pedidos</NavDropdown.Item>
                        <NavDropdown.Item href="/actualizar-datos">Actualizar datos</NavDropdown.Item>
                        <NavDropdown.Item href="/" onClick={props.cerrar}>Cerrar sesión</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        </>
    )
}

export default NavBarSm
