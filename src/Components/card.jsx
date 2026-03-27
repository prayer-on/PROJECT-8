 import {useState} from "react" 


function Card ({name, image_card, description}) {

     const [hasRotate, setHasRotate] = useState(false)

    return(
        <>
        <h2 className="sub-title">{name} PROJECT</h2>
        <div id="projects" className="wrapper-card" tabIndex={0}
        onFocus={() => setHasRotate(true)}
        onBlur={() => setHasRotate(false)}>
            {hasRotate? <p>{description}</p> : <img src={image_card}></img>}
        </div>
        </>
    );
}

export default Card;