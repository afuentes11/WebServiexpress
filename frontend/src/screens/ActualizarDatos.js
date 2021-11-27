import React from 'react';
import {Navigate} from 'react-router-dom';
import BarraNavegacion from '../components/barraNavegacion/BarraNavegacion';

const ActualizarDatos = () => {
    if(localStorage.getItem('data') === null){
        return <Navigate to='/'/>
    }
    return (
        <>
            <BarraNavegacion login={true} noHome={true}/>
            <h1>ACTUALIZAR DATOS</h1>
        </>
    )
}

export default ActualizarDatos
