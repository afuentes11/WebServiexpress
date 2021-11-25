import React from 'react'
import BarraNavegacion from './components/BarraNavegacion';
import SeccionCotizar from './screens/SeccionCotizar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <BarraNavegacion/>
      <SeccionCotizar/>
    </React.Fragment>
  );
}

export default App;
