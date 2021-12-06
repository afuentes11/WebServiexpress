import React from 'react'
import {Card, Stack} from 'react-bootstrap';

const Fila = (props) => {
    return (
        <>
            <Stack gap={3} direction = {'horizontal'} className='justify-content-between'>
            <div className='px-3' >{props.titulo}</div>
            <div className='px-3'>{props.contenido}</div>
            </Stack>
        </>
    )
}

const InfoPedido = (props) => {
    return (
        <>
        <Card border="primary" style={{maxWidth:'650' ,minWidth:'380px',width: '60vw', background: '#0a6ddb', color: 'white' }}>
            <Stack gap={3} >
                <Card.Header>
                    <h1 style={{ textAlign: 'center'}}> DETALLES DEL PEDIDO </h1>
                </Card.Header>
                <Fila titulo={'Fecha'} contenido={props.data.fecha}/>
                <Fila titulo={'Tipo servicio'} contenido={props.data.tipoServicio}/>
                <Fila titulo={'Dirección recogida'} contenido={props.data.direccionOrigen}/>
                <Fila titulo={'Dirección destino'} contenido={props.data.direccionDestino}/> 
                <Fila titulo={'Nombre de quien recibe'} contenido={props.data.nombreReceptor}/>
                <Fila titulo={'Teléfono de quien recibe'} contenido={props.data.celularReceptor}/>
                <Fila></Fila>
            </Stack>
        </Card>
        </>
    )
}

export default InfoPedido
