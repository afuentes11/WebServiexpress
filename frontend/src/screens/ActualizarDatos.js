import React from 'react';
import {Navigate} from 'react-router-dom';
import BarraNavegacion from '../components/barraNavegacion/BarraNavegacion';
import FormularioActualizar from '../components/actualizarDatos/FormularioActualizar';


const ActualizarDatos = () => {
    if(localStorage.getItem('id') === null){
        return <Navigate to='/'/>
    }
    return (
        <>
            <BarraNavegacion login={true} noHome={true}/>
            <FormularioActualizar/>
        </>
    )
}

export default ActualizarDatos
