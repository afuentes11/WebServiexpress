import React from "react";
import { Carousel } from "react-bootstrap";
import img4 from '../assets/img/img4.jpg';
import img5 from '../assets/img/img5.jpg';
import img6 from '../assets/img/img6.jpg';

const Carrusel = () => {
  return (
    <>
      <Carousel variant="dark" fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Serviexpress</h3>
            <p>Servicio de mensajería al instante.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img5}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Serviexpress</h3>
            <p>Servicio de mensajería al instante.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img6}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Serviexpress</h3>
            <p>Servicio de mensajería al instante.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carrusel;