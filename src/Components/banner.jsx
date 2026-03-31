import CV from "../assets/Prayer_Onaiwu_CV.pdf"

function Banner() {
    
    return(
<nav>  
<div className="wrapper-banner"> 
    <h1 tabIndex={0}>PO|</h1>
    <div><a href="#home">Frontend Developer</a></div>
</div>
    <ul>
    <li><a href="#presentation">Presentation</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href={CV} target="_blank" rel="noreferrer">Curriculum</a></li>
    </ul>
</nav>

    );
}

export default Banner

