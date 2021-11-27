import React from 'react'
import NavBarLg from './NavBarLg'
import NavBarSm from './NavBarSm'


const BarraNavegacion = (props) => {
  const cerrarSesion = () => {
    localStorage.removeItem('data');
  };
  return (
    <>
      <NavBarLg login = {props.login} noHome = {props.noHome} cerrar={cerrarSesion}/>
      <NavBarSm login = {props.login} noHome = {props.noHome} cerrar={cerrarSesion}/>
    </>
  )
}

export default BarraNavegacion
