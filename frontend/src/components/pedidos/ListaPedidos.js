import React,{useEffect, useState} from 'react'
import {Container, Tab, Row, Col, Nav} from 'react-bootstrap';
import {getUser} from '../../apis/UsersCRUD'

import TabPedido from './TabPedido'
import InfoPedido from './InfoPedido'

const ListaPedidos = () => {

  const [servicios, setServicios] = useState([]);
  const [ anyServicio, setAnyServicio] = useState(false);

  useEffect( ()=>{
    getUser(localStorage.getItem('id'), (response)=>{
      setServicios([...response.data.servicios]);
      if (response.data.servicios.length === 0) {
        setAnyServicio(true);
      }else {
        setAnyServicio(false);
      }
    })
  },[])
  return (
    <>
      {servicios.length !== 0 && 
              <Tab.Container defaultActiveKey="0" >
              <Row>
                <Col sm={4}>
                  <Nav variant="pills" className="flex-column">
                    {
                      servicios.map((data, index) => (
                        <Nav.Item key={data.uniqueId}>
                          <Nav.Link eventKey={index} >
                            <TabPedido tipo={data.tipoServicio}  fecha = {data.fecha}/>
                          </Nav.Link>
                        </Nav.Item>
                      ))
                    }
                  </Nav>
                </Col>
                <Col sm={8}>
                  <div style={{height:'80vh', display: 'flex'}} className='align-items-center justify-content-center'> 
                  <Tab.Content>
                    {
                      servicios.map((data,index) =>(
                        <Tab.Pane eventKey={index}>
                          <InfoPedido data = {data}/>
                        </Tab.Pane>
                      ))
                    }
                  </Tab.Content>
                  </div>
                </Col>
              </Row>
            </Tab.Container>
    }

    {
      anyServicio && 
        <Container fluid>
          <Row>
            <Col style={{minHeight: '85vh', borderRadius:'30px 30px 30px 30px'}} className = 'd-flex justify-content-center align-items-center shadow'>
              <p style={{fontSize: '5vw', textAlign:'center'}}>Cuando solicites tu primer servicio aparecerá en esta ventana</p>
              
            </Col>
          </Row>
        </Container>
    }
    </>
  )
}

export default ListaPedidos
