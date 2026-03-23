import htmlImage from '../assets/html.jpg'

function Card (props) {
    return(
        <main>           
    <h1>My Portfolio</h1>
        <div className="wrapper-container-card">
            <div className="wrapper-card">
            <img src={props.image}></img>
            <p>{props.description}</p>
            </div>
        </div>
    </main> 
    );
}

export default Card;