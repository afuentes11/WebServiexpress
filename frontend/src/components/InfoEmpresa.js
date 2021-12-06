import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

import okey from '../assets/img/Okey.jpg'
import gino from '../assets/img/GinoPassscalli.jpg'
import sings from '../assets/img/Sings.jpg'


const InfoEmpresa = () => {
    return (
        <>
            <Container id='quienes-somos' fluid={true} className='mt-5 ' style={{backgroundColor: '#EA0000', color:'#FFFFFF', paddingTop: '100px', paddingBottom: '100px'}}> 
                <Row>
                    <Col lg={{span:5, offset: 1  }} className='text-center align-self-center'>
                        <h1 style={{fontSize: '65px'}}>¿Quienes Somos?</h1>
                    </Col>
                    <Col lg={{span:5}} className=' text-center align-self-center'>
                        <p className='text-center text-lg-right mx-3 mx-lg-0' style={{fontSize: '20px'}}>Serviexpress del Cesar es una empresa legalmente constituida con 5 años de experiencia en al área de mensajería y domicilios en la ciudad de Valledupar, que brinda soluciones domiciliarias y logísticas enfocada en cumplir con altas expectativas de calidad y prestación del servicio, apoyados en infraestructura, tecnología y un talento humano comprometido con la satisfacción del cliente.</p>
                    </Col>
                </Row>
            </Container>

            <Container id='mision' fluid={true} className='' style={{color:'#EA0000' , paddingTop: '100px', paddingBottom: '100px'}}>
                <Row>
                    <Col lg={{span:5, order:2}} className='text-center align-self-center'>
                        <h1 style={{fontSize: '65px'}}>Nuestra Misión</h1>
                    </Col>
                    <Col lg={{span:5, order:1, offset:1}} className=' d-flex align-items-center '>
                        <p className='text-center text-lg-right mx-3 mx-lg-0' style={{fontSize: '20px'}}>Serviexpress del Cesar busca el crecimiento de pequeñas, medianas y grandes empresas brindando la logística necesaria de una manera rápida y eficiente, generando un impacto positivo con el usuario final. Para nosotros no es suficiente hacerlas cosas bien, sino superar las expectativas de nuestros clientes y usuarios.</p>
                    </Col>
                </Row>
            </Container>

            <Container id="vision" fluid={true} className='' style={{backgroundColor: '#EA0000', color:'#FFFFFF' , paddingTop: '100px', paddingBottom: '100px'}}> 
                <Row>
                    <Col lg={{span:5, offset: 1}} className='text-center align-self-center'>
                        <h1 style={{fontSize: '65px'}}>Nuestra Visión</h1>
                    </Col>
                    <Col lg={{span:5}} className=' d-flex align-items-center'>
                        <p className='text-center text-lg-right mx-3 mx-lg-0' style={{fontSize: '20px'}}>Para el año 2023 Serviexpres del Cesar debe estar constituida como una de las más grandes empresas de mensajería urbana en la ciudad de Valledupar, además de contar un amplio grupo de empresas y microempresas asociadas. Ampliar el número de trabajadores disponibles, con el fin de cubrir cualquier servicio en el menor tiempo posible.</p>
                    </Col>
                </Row>
            </Container>

            <Container id = 'experiencia' fluid={true} className='' style={{color:'#EA0000' , paddingTop: '100px', paddingBottom: '100px'}}>
                
                <Row>
                    <Col lg={{span:10, offset:1}} className='text-center' >
                        <h1 style={{fontSize: '65px'}}>Nuestras Experiencia</h1>
                        <p className='text-center text-lg-right mx-3 mx-lg-0' style={{fontSize: '20px'}}>Desde el inicio de Serviexpress del cesar hemos atravesado por diferentes pruebas para llegar a donde estamos hoy, y en el camino nos hemos encontrado con unos clientes maravillosos y con años de trayectoria, entre ellos tenemos:</p>
                    </Col>
                </Row>
                <Row>
                    <Col  md={{ span:4 }}>
                        <Image src = {okey} fluid /> 
                    </Col>
                    <Col  md={{span:4}}>
                        <Image src = {gino} fluid /> 
                    </Col>
                    <Col  md={{span:4}}>
                        <Image src = {sings} fluid /> 
                    </Col>
                </Row>
                
            </Container>
        </>
    )
}

export default InfoEmpresa
