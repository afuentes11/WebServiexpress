import React from 'react';
import BarraNavegacion from '../components/barraNavegacion/BarraNavegacion';

import SeccionCotizar from '../components/SeccionCotizar';
import SeccionServicio from '../components/SeccionServicios';
import InfoEmpresa from '../components/InfoEmpresa'
import Carrusel from '../components/Carrusel'
import { addUser } from '../apis/UsersCRUD';

const Home = () => {
    var log=true;
    if(localStorage.getItem('id') === null){
        log = false;
    }
    
    if(localStorage.getItem('isNew')){
        console.log(localStorage.getItem('isNew'))
        const data = JSON.parse(localStorage.getItem('data'))
        addUser(data, (response)=>{
            console.log(response);
        });
        localStorage.removeItem('isNew');
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
