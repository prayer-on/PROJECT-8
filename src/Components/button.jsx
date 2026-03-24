

function Button ({onClick, name, image_language}) {
    return(
        <button className="btn-project" onClick={onClick}>
            <span>{name}</span>
            <img src={image_language} />
        </button>
    );
}

export default Button;