import '../../App.css';
import json from "./restaurants.json";

const Card = () => {
    return (
        <div className='restaurants'>
            {(Object.entries(json) || []).map(([key, value]) => {
                    return (                  
                        <div className="cardDiv">
                            <img  className="cardImg" src={value.image} alt="Girl in a jacket" width="50" height="60" />
                            <h2 className="cardHeader">{value.title}</h2>
                            <p className="cardtext">{value.description}</p>
                        </div>
                    );
                })}
        </div>
    )
};


export const CardContainer = (Card);