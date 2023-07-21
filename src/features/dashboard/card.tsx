import '../../App.css';

const Card = () => {
    return (
        <div className="cardDiv">
            <img  className="cardImg" src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png" alt="Girl in a jacket" width="50" height="60" />
            <h2 className="cardHeader">KFC</h2>
            <p className="cardtext">Stall no:1</p>
        </div>
    )
};


export const CardContainer = (Card);