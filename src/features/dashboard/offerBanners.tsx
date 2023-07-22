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
                src="https://graphicsfamily.com/wp-content/uploads/edd/2020/11/Tasty-Food-Web-Banner-Design-scaled.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};


export const OfferBanners = (Offers);
