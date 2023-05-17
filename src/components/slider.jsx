
import Carousel from 'react-bootstrap/Carousel';
import '../styles/slider.css';
import Container from 'react-bootstrap/Container';

function Slider() {

    return (
        <>
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://c4.wallpaperflare.com/wallpaper/458/576/1008/internet-hi-tech-social-network-wallpaper-preview.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://c4.wallpaperflare.com/wallpaper/458/576/1008/internet-hi-tech-social-network-wallpaper-preview.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://c4.wallpaperflare.com/wallpaper/458/576/1008/internet-hi-tech-social-network-wallpaper-preview.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </Container>
        </>
    )
}

export default Slider