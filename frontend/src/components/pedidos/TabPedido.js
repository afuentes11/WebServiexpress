import React from 'react';
import {Stack} from 'react-bootstrap';
import {CalendarCheck, BoxSeam} from 'react-bootstrap-icons'

const TabPedido = (props) => {
    return (
        <>
            <Stack >
                <Stack direction="horizontal" gap = {2}>
                    <BoxSeam/>
                    <div>{props.tipo}</div>
                </Stack>
                <Stack direction="horizontal" gap = {2}>
                    <CalendarCheck/>
                    <div>{props.fecha}</div>
                </Stack>
                
            </Stack>
        </>
    )
}

export default TabPedido
