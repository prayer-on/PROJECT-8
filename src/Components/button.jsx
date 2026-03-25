

function Button ({onClick, image_language, className}) {
    return(
        <button className={`${className} btn-project`} onClick={onClick}>
            <img src={image_language} />
        </button>
    );
}

export default Button;