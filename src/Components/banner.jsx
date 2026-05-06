import CVengfr from "../assets/Prayer_Onaiwu_CV_ENG/FR.pdf"


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
    <li><a href={CVengfr} target="_blank" rel="noreferrer">Curriculum ENG/FR</a></li>
    </ul>
</nav>

    );
}

export default Banner

