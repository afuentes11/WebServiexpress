import React, {useState} from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'

const FormularioCotizar = () => {

    const [tipoServicio, setTipoServicio] = useState('0')
    const onChangeServicio = (e) => {
        setTipoServicio(e.target.value);
        console.log(tipoServicio);
    }

    const [distancia, setDistancia] = useState('1')
    const onChangeDistancia = (e) => {
        setDistancia(e.target.value);
    }

    const [tiempo, setTiempo] = useState('1')
    const onChangeTiempo = (e) => {
        setTiempo(e.target.value);
    }

    const [dinero, setDinero] = useState('1')
    const onChangeDinero = (e) => {
        setDinero(e.target.value)
    }

    const [zonaPeligrosa, setZonaPeligrosa] = useState(false)
    const onChangeZonaPeligrosa = (e) => {
        setZonaPeligrosa(!zonaPeligrosa)
    }

    const [fueraCascoUrbano, setFueraCascoUrbano] = useState(false)
    const onChangeFueraCascoUrbano = (e) => {
        setFueraCascoUrbano(!fueraCascoUrbano)
    }
    
    const [total, setTotal] = useState(0);
    const servicios = {
        tipoServicios:{
            '1': 3000, /* mensajeria puerta a puerta*/
            '2': 5000, /* Servicios ida y vuelta*/
            '3': 4000, /* Compras*/
            '4': 4000, /* Reposteria*/
            '5': 4000, /* Transporte de tecnologia*/
            '6': 4000, /* Pagos y consignaciones*/
            '7': 8000, /* Diligencias bancarias*/
            '8': 3000, /* Transporte de dinero*/
            '9': 6000, /* Radicacion de documentos*/
            '10': 6000, /* reclamacion de medicamentos*/
        },

        distancia: {
            '1': 0, /*media*/
            '2': 1000, /*larga*/
        },

        tiempo:{
            '1': 0, /*0-1 hora*/
            '2': 8000, /*1-2 horas*/
            '3': 16000, /*mas de 2 horas*/
        },

        dinero:{
            '1':0, /*0-100K pesos*/
            '2':2000 , /*100K-200K pesos*/
            '3':4000 , /*+200K pesos*/
        },

        zonaPeligrosa: {
            true:1000, 
            false:0
        },

        fueraCascoUrbano: {
            true:8000, 
            false:0
        }


    }
    const onClick = (e) => {
        var value = 0;
        if(tipoServicio!=='0'){
            value = servicios.tipoServicios[tipoServicio]+
                    servicios.distancia[distancia]+
                    servicios.tiempo[tiempo]+
                    servicios.dinero[dinero];
            if(zonaPeligrosa){
                value += servicios.zonaPeligrosa['true'];
            }
            if(fueraCascoUrbano){
                value += servicios.fueraCascoUrbano['true'];
            }
        }
        setTotal(value);
    };

    return (
        <>
            <Form>
                <Row className="mt-4 mb-3">
                    <Form.Label htmlFor="inlineFormCustomSelect" visuallyHidden={false?true:false} >
                        <h2>Cotiza tu servicio aquí</h2>
                    </Form.Label>
                </Row>
                
                <Row className="text-start mb-4">
                    <Form.Group as = {Col} sm={{ span: 12}}>
                        <Form.Label >Tipo de servicio</Form.Label>
                        <Form.Select className="me-sm-12" value={tipoServicio} onChange={onChangeServicio}>
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
                
                <Row className="text-start mb-4" >
                    <Form.Group as = {Col} sm={{ span: 10, offset: 1}}  lg={{ span: 4, offset: 0}} >
                        <Form.Label>Distancia</Form.Label>
                        <Form.Select   
                        value={(tipoServicio !== '1' && tipoServicio !== '2')?'1':distancia} 
                        onChange={onChangeDistancia} 
                        disabled={(tipoServicio !== '1' && tipoServicio !== '2')?true:false}>
                            
                            <option value="1">Media</option>
                            <option value="2">Larga</option>
                        </Form.Select>
                    </Form.Group>
                    
                    <Form.Group as = {Col} sm={{ span: 10, offset: 1}}  lg={{ span: 4, offset: 0}} >
                        <Form.Label >Tiempo estimado</Form.Label>
                        <Form.Select  
                        value={(tipoServicio !== '3' && tipoServicio !== '7' && tipoServicio !== '9' && tipoServicio !== '10')?'1':tiempo} 
                        onChange={onChangeTiempo}
                        disabled={(tipoServicio !== '3' && tipoServicio !== '7' && tipoServicio !== '9' && tipoServicio !== '10')?true:false}>
                            
                            <option value="1">Entre 0 y 1 hora</option>
                            <option value="2">Entre 1 y 2 horas</option>
                            <option value="2">Más de 2 horas</option>
                        </Form.Select>
                    </Form.Group>
                    
                    <Form.Group as = {Col} sm={{ span: 10, offset: 1}}  lg={{ span: 4, offset: 0}} >
                        <Form.Label >Dinero a transportar</Form.Label>
                        <Form.Select   
                        value={(tipoServicio !== '6' && tipoServicio !== '8')?'1':dinero} 
                        onChange={onChangeDinero}
                        disabled={(tipoServicio !== '6' && tipoServicio !== '8')?true:false}>
                            
                            <option value="1">de $0 a $100.000</option>
                            <option value="2">de $100.000 a $200.000</option>
                            <option value="3">mas de $200.000</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Form.Group as={Row} className="mb-4">
                    <Col sm={{ span: 10, offset: 1}}  lg={{ span: 3, offset: 1}}>
                        <Form.Check label="Zona peligrosa"
                        value = {zonaPeligrosa}
                        onChange={onChangeZonaPeligrosa}/>
                    </Col>
                    <Col sm={{ span: 10, offset: 1}}  lg={{ span: 4, offset: 2}}>
                        <Form.Check label="Fuera del casco urbano" 
                        value = {fueraCascoUrbano}
                        onChange={onChangeFueraCascoUrbano}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} >
                    <Col sm={{ span: 10, offset: 1}}  lg={{ span: 4, offset: 0}}>
                        <h3>Total estimado:</h3>
                    </Col>
                    <Col sm={{ span: 10, offset: 1}}  lg={{ span: 5, offset: 0}}>
                        <Form.Control type="text"  readOnly value = {total} className='text-center'/>
                    </Col>
                    <Col sm={{ span: 10, offset: 1}}  lg={{ span: 3, offset: 0}}>
                        <Button variant="warning" className='pr-10 pl-10' onClick={onClick}>Success</Button>
                    </Col>
            
                </Form.Group>

            </Form>
        </>
    ) 
}

export default FormularioCotizar
