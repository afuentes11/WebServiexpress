import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Stack, Button, Form, Modal } from "react-bootstrap";

import {updateUserTotally, getUser} from '../../apis/UsersCRUD'

const FormularioActualizar = () => {

    const [nombre, setNombre] = useState('');
    const [cedula, setCedula] = useState('');
    const [celular, setCelular] = useState('');
    const [direccion, setDireccion] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect( ()=>{
        getUser(localStorage.getItem('id'), (response)=>{
            setNombre(response.data.nombre);
            setCedula(response.data.cedula);
            setCelular(response.data.celular);
            setDireccion(response.data.direccion);
            localStorage.setItem('user', JSON.stringify(response.data));
        })
    },[])

    const onChange = {
        'nombre' : (e) => {
            setNombre(e.target.value);
        },
        'cedula' : (e) => {
            setCedula(e.target.value);
        },
        'celular' : (e) => {
            setCelular(e.target.value);
        },
        'direccion' : (e) => {
            setDireccion(e.target.value);
        },


    }
    
    const click = () => {
        const data =JSON.parse(localStorage.getItem('user'));
        data.nombre = nombre;
        data.cedula =cedula;
        data.celular =celular;
        data.direccion = direccion;
        localStorage.setItem('user', JSON.stringify(data));
        updateUserTotally(data.id, data, (response) => {
            console.log(response);
        });
        handleShow();
    }

    return (
        <>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            Los datos se actualizaron correctamente
        </Modal.Body>
        </Modal>
        <Container style={{height: '100%'}} className="col-md-6 mx-auto my-auto mt-lg-0 mt-3" >
            <Row>
            <Col>
                
                <Stack gap={3} as={Container} className="shadow py-5 px-3 " style={{borderRadius:'50px 50px 50px 50px'}}>
                
                <Stack as={Container} className="text-center">
                    <h3>Actualizar Tus Datos</h3>
                    <p>Es rápido y fácil.</p>
                </Stack>

                <Stack >
                    <Form.Label> Nombre Completo</Form.Label>
                    <Form.Control className="me-auto" placeholder="Nombre" value={nombre} onChange = {onChange.nombre}/>
                </Stack>

                <Stack >
                    <Form.Label>Cédula</Form.Label>
                    <Form.Control className="me-auto" placeholder="Cédula" value={cedula} onChange = {onChange.cedula}/>
                </Stack>

                <Stack >
                    <Form.Label>Celular</Form.Label>
                    <Form.Control className="me-auto" placeholder="Número de celular" value={celular} onChange = {onChange.celular}/>
                </Stack>
                

                <Stack >
                    <Form.Label>Dirección de residencia</Form.Label>
                    <Form.Control className="me-auto" placeholder="Dirección" value={direccion} onChange = {onChange.direccion}/>
                </Stack>
                

                <Button variant="dark" onClick={click}>Guardar Cambios</Button>
                </Stack>
            </Col>
            </Row>
        </Container>
        </>
    )
}

export default FormularioActualizar
