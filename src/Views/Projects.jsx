import Card from '../Components/card.jsx'
import Button from '../Components/button.jsx'
import Html from '../assets/html.jpg'
import reactSvg from "../assets/react_dark.svg"
import gitHubSvg from "../assets/github_light.svg"
import sassSvg from "../assets/sass.svg"
import javascriptSvg from "../assets/javascript.svg"


function ProjectPage () {

const reactProject = () => {
 window.open("https://github.com/prayer-on/PROJECT-5.git", "_blank");
}
    return (
        <>
        <Card image_card= {Html} description= "A responsive frontend web application for property rentals. I used a JSON file to handle data dynamically and React Router to provide modern, seamless navigation between pages without refreshing, while leveraging Sass to ensure a clean and organized codebase."/>
        <div className="btn-container">
        <Button onClick={reactProject} image_language={gitHubSvg}/> 
        <Button name= "React.js" image_language={reactSvg}/>
        <Button name= "Sass" image_language={sassSvg}/>
        <Button name= "JavaScript" image_language={javascriptSvg}/>
        </div>
        </>
    );
}

export default ProjectPage;

/* mettere il gap: 0px su GITHUB QUI. */