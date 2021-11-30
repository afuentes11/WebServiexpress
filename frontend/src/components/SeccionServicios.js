import React from 'react';
import img1 from '../assets/img/img1.jpg';
import FormularioServicio from '../components/FormularioServicio'
import {Container, Row, Col} from "react-bootstrap";

const SeccionServicios = () => {
    return (
        <>
        <Container id='solicitar-servicio' fluid >
        <Container fluid className='mt-3'>
            <Row >
                <Col sm={{ span: 12, offset: 0}}  lg={{ span: 6, offset: 0}} className =' align-self-center'>
                <img
                    className="d-none d-lg-block img-fluid"
                    src={img1}
                    alt="First slide"
                    width = "150%"
                    style={{borderRadius: '50px 50px 50px 50px' }}
                    
                    />
                </Col>
                <Col sm={{ span: 12, offset: 0 }}  lg={{ span: 6, offset: 0 }} className = 'text-center mt-sm-5 my-lg-0'>
                    <FormularioServicio/>
                </Col>
            </Row>
        </Container>
        </Container>
        
            
        </>
    )
}

export default SeccionServicios
