import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.motor1.com/images/mgl/2PgYn/s1/ferrari-laferrari.webp"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Ferrari LaFerrari</h3>
                        <p>The folks at Aston Martin know a thing or two about exclusive vehicles</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.motor1.com/images/mgl/39ygL/s1/pagani-huayra.webp
                        "
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Pagani Huayra</h3>
                        <p>Inarguably one of the prettiest cars on this list</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.motor1.com/images/mgl/WmLWo/s1/aston-martin-victor-static.webp
                        "
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Bentley Bacalar</h3>
                        <p>The McLaren Elva is one of the latest additions to the British supercar maker’s storied legacy</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;