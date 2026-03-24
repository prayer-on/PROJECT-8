 

function Card ({image_card, description}) {
    return(
        <div className="wrapper-card">
            <img src={image_card}></img>
            <p>{description}</p>
        </div>
    );
}

export default Card;