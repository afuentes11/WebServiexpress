import React from 'react'
import {Navigate} from 'react-router-dom';
import {Container} from 'react-bootstrap'

import BarraNavegacion from '../components/barraNavegacion/BarraNavegacion';
import ListaPedidos from '../components/pedidos/ListaPedidos'

const Pedidos = () => {
    if(localStorage.getItem('id') === null){
        return <Navigate to='/'/>
    }
    return (
        <>  
            <BarraNavegacion login={true} noHome={true}/>
            <Container className='d-block m-3'>
                <ListaPedidos/>
            </Container>
            
            
            
        </>
    )
}

export default Pedidos
