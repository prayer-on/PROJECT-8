 import {useState} from "react" 


function Card ({image_card, description}) {

     const [hasRotate, setHasRotate] = useState(false)

    return(
        <div className="wrapper-card" tabIndex={0}
        onFocus={() => setHasRotate(true)}
        onBlur={() => setHasRotate(false)}>
            {hasRotate? <p>{description}</p> : <img src={image_card}></img>}
        </div>
    );
}

export default Card;