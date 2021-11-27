import React from 'react';
import {Carousel} from 'react-bootstrap';
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';

const Carrusel = () => {
    return (
        <>
            <Carousel variant="dark" >
                <Carousel.Item interval={5000}>
                    <img
                    className="img-fluid"
                    src={img1}
                    alt="First slide"
                    width = "150%"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="img-fluid"
                    src={img2}
                    alt="Second slide"
                    width = "150%"
                    
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="img-fluid"
                    src={img3}
                    alt="Third slide"
                    width = "150%"
                    
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default Carrusel
