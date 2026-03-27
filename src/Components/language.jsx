

function Language (props) {
    return(
        <div className="language item">
            <img src= {props.image} alt={`${props.name} logo`}></img>
            <h3>{props.name}</h3>
        </div>
    );
}

export default Language