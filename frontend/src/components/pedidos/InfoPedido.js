import React from 'react'
import {Card, Stack} from 'react-bootstrap';

const Fila = (props) => {
    return (
        <>
            <Stack gap={3} direction = {'horizontal'} className='justify-content-between'>
            <div >{props.titulo}:</div>
            <div >{props.contenido}</div>
            </Stack>
        </>
    )
}

const InfoPedido = () => {
    return (
        <>
        <Card border="primary" style={{ width: '46rem', background: '#0a6ddb', color: 'white' }}>
            <Stack gap={1} >
                <Card.Header><h1 style={{alignSelf: 'center'}} >DETALLES DEL PEDIDO</h1></Card.Header>
                <Fila titulo={'Fecha'} contenido={'Aca va la fecha a la que se solicitó el servicio'}/>
                <Fila titulo={'Tipo servicio'} contenido={'Aca va el tipo de servicio'}/>
                <Fila titulo={'Dirección recogida'} contenido={'contenido'}/>
                <Fila titulo={'Dirección destino'} contenido={'contenido'}/> 
                <Fila titulo={'Nombre de quien recibe'} contenido={'contenido'}/>
                <Fila titulo={'Teléfono de quien recibe'} contenido={'contenido'}/>
            </Stack>
        </Card>
        </>
    )
}

export default InfoPedido
