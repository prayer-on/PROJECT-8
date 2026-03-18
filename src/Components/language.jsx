

function Language (props) {
    return(
        <div className="language item">
            <img src= {props.image} alt="software language"></img>
            <h6>{props.name}</h6>
        </div>
    );
}

export default Language