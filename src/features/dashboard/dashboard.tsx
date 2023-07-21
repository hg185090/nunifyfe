import { CardContainer } from './card'
import '../../App.css';
import { OfferBanners } from './offerBanners';


const Landing = () => {
    return (
        <div className='dashboard'>
            <OfferBanners />
            <CardContainer />
        </div>
    );
};


export const LandingContainer = (Landing);
