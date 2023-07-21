import '../../App.css';
import json from "./restaurants.json";
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <div className='restaurants'>
            {(Object.entries(json) || []).map(([key, value]) => {
                    return (                  
                        <Link to="/menu" className="cardDiv" >
                            <div className='imgDIv'>
                                <img  className="cardImg" src={value.image ? value.image : 'https://geekflare.com/wp-content/uploads/2023/03/img-placeholder.png'} alt="Girl in a jacket" width="50" height="60" />
                            </div>
                            <h2 className="cardHeader">{value.title}</h2>
                            <p className="cardtext">{value.description}</p>
                        </Link>
                    );
                })}
        </div>
    )
};


export const CardContainer = (Card);