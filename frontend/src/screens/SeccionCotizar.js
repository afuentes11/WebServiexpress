import React from 'react';
import Carrusel from '../components/Carrusel';
import FormularioCotizar from '../components/FormularioCotizar'
import {Container, Row, Col} from "react-bootstrap";

const SeccionCotizar = () => {
    return (
        <>
        <Container fluid >
            <Row className = 'm-3' >
                <Col sm={{ span: 12, offset: 0, order:1}}  lg={{ span: 6, offset: 0, order:2}} className =' align-self-center'>
                    <Carrusel/>
                </Col>
                <Col sm={{ span: 12, offset: 0 }}  lg={{ span: 6, offset: 0 }} className = 'text-center'>
                    <FormularioCotizar/>
                </Col>
            </Row>
        </Container>
            
        </>
    )
}

export default SeccionCotizar
