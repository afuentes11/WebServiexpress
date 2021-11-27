import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './screens/Home';
import ActualizarDatos from './screens/ActualizarDatos';
import Pedidos from './screens/Pedidos';


function App() {

  return (
      <>

        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/actualizar-datos" element = {<ActualizarDatos/>}/>
            <Route path="/pedidos" element = {<Pedidos/>}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
