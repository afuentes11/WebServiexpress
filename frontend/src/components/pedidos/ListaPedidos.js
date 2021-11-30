import React from 'react'
import {Tab, Row, Col, Nav} from 'react-bootstrap';

import TabPedido from './TabPedido'
import InfoPedido from './InfoPedido'

const ListaPedidos = () => {

  return (
    <>
      
        <Tab.Container defaultActiveKey="1" >
          <Row>
            <Col sm={4}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item >
                  <Nav.Link eventKey="1" >
                    <TabPedido/>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2">
                    <TabPedido/>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="3">
                    <TabPedido/>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="4">
                    <TabPedido/>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={8} >
              <Tab.Content >
                
                <Tab.Pane eventKey="1">
                  <InfoPedido/>
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                <InfoPedido/>
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                <InfoPedido/>
                </Tab.Pane>
                <Tab.Pane eventKey="4">
                <InfoPedido/>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
    
    </>
  )
}

export default ListaPedidos
