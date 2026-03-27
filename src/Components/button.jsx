

function Button ({onClick, image_language, className, alt}) {
    return(
        <button className={`${className} btn-project`} onClick={onClick}>
            <img src={image_language} alt={alt}/>
        </button>
    );
}

export default Button;