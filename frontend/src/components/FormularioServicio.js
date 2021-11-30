import React, {useState} from 'react'
import {Form, Row, Col, Button, Container, Modal} from 'react-bootstrap'
import {updateUserTotally} from '../apis/UsersCRUD'

const FormularioServicio = () => {

    const [tipoServicio, setTipoServicio] = useState('0')
    const [direccionOrigen, setDireccionOrigen] = useState('')
    const [direccionDestino, setDireccionDestino] = useState('')
    const [nombreReceptor, setNombreReceptor] = useState('')
    const [celularReceptor, setCelularReceptor] = useState('')
    const [show, setShow] = useState(false);
    const [mensaje, setMensaje] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onChange = {
        'tipoServicio' : (e) => {
            setTipoServicio(e.target.value);
        },
        'direccionOrigen' : (e) => {
            setDireccionOrigen(e.target.value);
        },
        'direccionDestino' : (e) => {
            setDireccionDestino(e.target.value);
        },
        'nombreReceptor' : (e) => {
            setNombreReceptor(e.target.value);
        },
        'celularReceptor' : (e) => {
            setCelularReceptor(e.target.value);
        },
    }
    
    
    const servicios = {
        tipoServicios:{
            '1': 'mensajeria puerta a puerta',
            '2': 'Servicios ida y vuelta', 
            '3': 'Compras', 
            '4': 'Reposteria', 
            '5': 'Transporte de tecnologia', 
            '6': 'Pagos y consignaciones', 
            '7': 'Diligencias bancarias', 
            '8': 'Transporte de dinero',
            '9': 'Radicacion de documentos', 
            '10': 'reclamacion de medicamentos',
        },
    }
    const onClick = (e) => {
        if(tipoServicio=='0' || direccionOrigen=='' || direccionDestino=='' || nombreReceptor=='' || celularReceptor=='') {
            setMensaje('Verifique que todos los campos estan llenos');
            handleShow();
        }else if(localStorage.getItem('id') === null){
            setMensaje('Debes iniciar sesion antes de solicitar un servicio')
            handleShow();
        }
        else{
            const fecha = new Date(Date.now());
            
            const servicio = {
                'fecha': `${fecha.toLocaleDateString()}-${fecha.toLocaleTimeString()}`,
                'tipoServicio' : servicios[tipoServicio],
                'direccionOrigen' : direccionOrigen,
                'direccionDestino' : direccionDestino,
                'nombreReceptor' : nombreReceptor,
                'celularReceptor' : celularReceptor,
            }
            const data =JSON.parse(localStorage.getItem('user'));
            data.servicios.push(servicio);
            localStorage.setItem('user', JSON.stringify(data));
            updateUserTotally(data.id, data, (response) => {
                console.log(response);
            });
            setMensaje('Su solicitud fue exitosa, pronto recibirá una llamada');
            setTipoServicio('0');
            setDireccionOrigen('');
            setDireccionDestino('');
            setNombreReceptor('');
            setCelularReceptor('');
            handleShow();
        }
    };

    return (
        <>
            <Modal show={show}  onHide={handleClose} backdrop="static" keyboard={false} centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                {mensaje}
            </Modal.Body>
            </Modal>
            <Form  as={Container} className="shadow pt-1 pb-3 px-3 " style={{borderRadius:'30px 30px 30px 30px'}}>
                <Row className="mt-4 mb-3">
                    <Form.Label  >
                        <h1>Solicite su servicio aquí</h1>
                    </Form.Label>
                </Row>
                
                <Row className="text-start mb-2">
                    <Form.Group as = {Col} sm={{ span: 12}}>
                        <Form.Label >Tipo de servicio</Form.Label>
                        <Form.Select className="me-sm-12" value={tipoServicio} onChange={onChange.tipoServicio}>
                            <option value="0">Seleccione...</option>
                            <option value="1">Mensajería Puerta a Puerta </option>
                            <option value="2">Servicio ida y vuelta</option>
                            <option value="3">Compras</option>
                            <option value="4">Repostería</option>
                            <option value="5">Transporte de tecnología</option>
                            <option value="6">Pagos y Consignaciones</option>
                            <option value="7">Diligencias Bancarias</option>
                            <option value="8">Transporte de dinero </option>
                            <option value="9">Radicado de documentos</option>
                            <option value="10">Reclamación de medicamentos</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                
                <Row className="text-start mb-2">
                    <Form.Group as = {Col} sm={{ span: 12}}>    
                        <Form.Label>Direccion de origen</Form.Label>
                        <Form.Control className="me-auto" value={direccionOrigen} onChange = {onChange.direccionOrigen}/>
                    </Form.Group>
                </Row>

                <Row className="text-start mb-2">
                    <Form.Group as = {Col} sm={{ span: 12}}>    
                        <Form.Label>Direccion de destino</Form.Label>
                        <Form.Control className="me-auto" value={direccionDestino} onChange = {onChange.direccionDestino}/>
                    </Form.Group>
                </Row>

                <Row className="text-start mb-2">
                    <Form.Group as = {Col} sm={{ span: 12}}>    
                        <Form.Label>Nombre de quien recibe</Form.Label>
                        <Form.Control className="me-auto" value={nombreReceptor} onChange = {onChange.nombreReceptor}/>
                    </Form.Group>
                </Row>

                <Row className="text-start mb-3">
                    <Form.Group as = {Col} sm={{ span: 12}}>    
                        <Form.Label>Celular de quien recibe</Form.Label>
                        <Form.Control className="me-auto" value={celularReceptor} onChange={onChange.celularReceptor}/>
                    </Form.Group>
                </Row>

                <Form.Group as={Row} >
                    
                    <Form.Group as={Col} sm={{ span: 12}} style={{display:'grid'}} >
                        <Button variant="dark" className="btn btn-block" onClick={onClick}>Solicitar Servicio</Button>
                    </Form.Group>
            
                </Form.Group>

            </Form>
        </>
    ) 
}

export default FormularioServicio
