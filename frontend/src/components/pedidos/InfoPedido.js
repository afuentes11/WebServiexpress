import React from 'react'
import {Stack} from 'react-bootstrap';

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
            <Stack gap={1} >
                <h1 style={{alignSelf: 'center'}} >DETALLES DEL PEDIDO</h1>
                <Fila titulo={'fecha'} contenido={'Aca va la fecha a la que se solicitó el servicio'}/>
                <Fila titulo={'Tipo servicio'} contenido={'Aca va el tipo de servicio'}/>
                <Fila titulo={'Dirección recogida'} contenido={'contenido'}/>
                <Fila titulo={'Dirección destino'} contenido={'contenido'}/> 
                <Fila titulo={'Nombre de quien recibe'} contenido={'contenido'}/>
                <Fila titulo={'teléfono de quien recibe'} contenido={'contenido'}/>
            </Stack>
        </>
    )
}

export default InfoPedido
