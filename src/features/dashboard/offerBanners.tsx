import '../../App.css';
import Carousel from 'react-bootstrap/Carousel';

const Offers = () => {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://marketplace.canva.com/EAFanHj4_og/1/0/1600w/canva-yellow-red-modern-food-promotion-banner-landscape-D5j43WWUmtA.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://img.freepik.com/free-psd/food-menu-restaurant-facebook-cover-template_120329-1688.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://img.freepik.com/free-psd/food-menu-restaurant-facebook-cover-template_120329-1688.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};


export const OfferBanners = (Offers);
