import React from 'react';
import img7 from '../assets/img/img7.jpg';
import FormularioCotizar from '../components/FormularioCotizar'
import {Container, Row, Col} from "react-bootstrap";

const SeccionCotizar = () => {
    return (
        <>
        <Container id='cotizar' fluid >
        <Container fluid className='mt-3'>
            <Row >
                <Col sm={{ span: 12, offset: 0}}  lg={{ span: 6, offset: 0, order:2}} className =' align-self-center'>
                <img
                    className="d-none d-lg-block img-fluid"
                    src={img7}
                    alt="First slide"
                    width = "150%"
                    style={{borderRadius: '50px 50px 50px 50px' }}
                    
                    />
                </Col>
                <Col sm={{ span: 12, offset: 0 }}  lg={{ span: 6, offset: 0 }} className = 'text-center mt-sm-5 my-lg-0'>
                    <FormularioCotizar/>
                </Col>
            </Row>
        </Container>
        </Container>
        
            
        </>
    )
}

export default SeccionCotizar
