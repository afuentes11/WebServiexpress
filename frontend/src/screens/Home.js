import React from 'react';
import BarraNavegacion from '../components/barraNavegacion/BarraNavegacion';

import SeccionCotizar from '../components/SeccionCotizar';
import SeccionServicio from '../components/SeccionServicios';
import InfoEmpresa from '../components/InfoEmpresa'
import Carrusel from '../components/Carrusel'

const Home = () => {
    var log=true;
    if(localStorage.getItem('id') === null){
        log = false;
    }
    return (
        <>  
            <BarraNavegacion login={log}/>
            <Carrusel/>
            <SeccionCotizar/>
            <SeccionServicio />
            <InfoEmpresa/>
        </>
    )
}

export default Home
