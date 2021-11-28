import React from "react";
import { Navigate } from "react-router-dom";
import BarraNavegacion from "../components/barraNavegacion/BarraNavegacion";
import { Container, Row, Col, Stack, Button, Form } from "react-bootstrap";

const ActualizarDatos = () => {
  if (localStorage.getItem("data") === null) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <BarraNavegacion login={true} noHome={true} />
      <Container className="col-md-5 mx-auto" style={{ padding:'20px'}}>
        <Row>
          <Col>
            <Stack gap={2} as={Container} className="shadow py-5 px-3 " style={{borderRadius:'50px 50px 50px 50px'}}>
              <h3>Actualizar Tus Datos</h3>
              <p>Es rápido y fácil.</p>
              <Form.Control className="me-auto" placeholder="Nombre" />
              <br />
              <Form.Control className="me-auto" placeholder="Apellido" />
              <br />
              <Form.Control className="me-auto" placeholder="Número telefónico"/>
              <br />
              <Form.Control className="me-auto" placeholder="Dirección" />
              <br />
              <Button variant="dark" type="submit">Guardar Cambios</Button>
              <Button variant="outline-secondary">Cancelar</Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ActualizarDatos;
