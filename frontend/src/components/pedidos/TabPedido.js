import React from 'react';
import {Stack} from 'react-bootstrap';
import {CalendarCheck, BoxSeam} from 'react-bootstrap-icons'

const TabPedido = () => {
    return (
        <>
            <Stack >
                <Stack direction="horizontal" gap = {2}>
                    <BoxSeam/>
                    <div>Tipo de servicio</div>
                </Stack>
                <Stack direction="horizontal" gap = {2}>
                    <CalendarCheck/>
                    <div>Fecha</div>
                </Stack>
                
            </Stack>
        </>
    )
}

export default TabPedido
