import React from 'react'
import {Navigate} from 'react-router-dom';

import BarraNavegacion from '../components/barraNavegacion/BarraNavegacion';

const Pedidos = () => {
    if(localStorage.getItem('data') === null){
        return <Navigate to='/'/>
    }
    return (
        <>  
            <BarraNavegacion login={true} noHome={true}/>
            <h1>PEDIDOS</h1>
        </>
    )
}

export default Pedidos
