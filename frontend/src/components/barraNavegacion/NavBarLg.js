import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

import BotonLogin from './BotonLogin'

const NavBarLg = (props) => {

    var autenticado ='';
    var sinAutenticar='';
    var noHome='d-flex';
    if(props.login) {
    autenticado ='d-none';
    sinAutenticar='d-block';
    }else{
        autenticado ='d-block';
        sinAutenticar='d-none';
    }
    if(props.noHome){
        noHome='d-none';
    }

return (
    <>
        <Navbar sticky="top" expand="lg" bg="ligth" variant="dark" style={{backgroundColor: '#EA0000'}} className='d-none d-lg-block'>
        <Container>
            <Navbar.Brand href="/">Serviexpress</Navbar.Brand>
            <Nav className = {noHome}> 
                <Nav.Link href="#cotizar">Cotizar</Nav.Link>
                <Nav.Link href="#solicitar-servicio">Solicitar servicio</Nav.Link>
                <NavDropdown title="Sobre nosotros" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/#quienes-somos">Quienes somos</NavDropdown.Item>
                <NavDropdown.Item href="/#mision">Misión</NavDropdown.Item>
                <NavDropdown.Item href="/#vision">Visión</NavDropdown.Item>
                <NavDropdown.Item href="/#experiencia">Experiencia</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                
                <NavDropdown title="Iniciar sesión" className = {autenticado}>
                    <NavDropdown.Item drop={'start'} key={'start'}>
                        <BotonLogin/>
                    </NavDropdown.Item>
                </NavDropdown>
    
                <NavDropdown title="Mi cuenta" id="collasible-nav-dropdown" className = {sinAutenticar}>
                <NavDropdown.Item href="/pedidos">Pedidos</NavDropdown.Item>
                <NavDropdown.Item href="/actualizar-datos">Actualizar datos</NavDropdown.Item>
                <NavDropdown.Item href="/" onClick={props.cerrar}>Cerrar sesión</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Container>
        </Navbar>
    </>
)
}

export default NavBarLg
