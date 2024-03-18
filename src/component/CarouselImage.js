import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselImage = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src='https://hospitalitysnapshots.com/wp-content/uploads/sites/3/2022/06/73193-full-3962-1-73193-sc-v2com-1536x1022.jpg' alt='Nehru' style={{width : "100%", height : "450px" }}/>
        
                    <Carousel.Caption>
                        <h3>Enough Seating Capacity</h3>
                        <p>Are you a family of 10 members? No Problem, "Hum hai na"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://tse3.mm.bing.net/th/id/OIP.hkh14F_c3N_nKL0Y6JFXAwHaEo?rs=1&pid=ImgDetMain' alt='Nehru' style={{width : "100%", height : "450px" }}/>

                    <Carousel.Caption>
                        <h3>Candid Lighting Experience</h3>
                        <p>We have amazing environment in addition to food</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://tse4.mm.bing.net/th/id/OIP.-QGkMR1Pm-KXLBdZCnSy2QHaEK?rs=1&pid=ImgDetMain' alt='Nehru' style={{width : "100%", height : "450px" }}/>

                    <Carousel.Caption>
                        <h3>Official parties and arrangements</h3>
                        <p>We will provide you with everything you need</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselImage
