import React from 'react';
import BarraNavegacion from '../components/barraNavegacion/BarraNavegacion';

import SeccionCotizar from '../components/SeccionCotizar';


const Home = () => {
    var log=true;
    if(localStorage.getItem('data') === null){
        log = false;
    }
    return (
        <>  
            <BarraNavegacion login={log}/>
            <SeccionCotizar/>
        </>
    )
}

export default Home
