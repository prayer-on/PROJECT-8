import Card from '../Components/card.jsx'
import Button from '../Components/button.jsx'
import Project_React from '../assets/react_project.png'
import Backend_Project from '../assets/backend_project.png'
import reactSvg from "../assets/react_dark.svg"
import gitHubSvg from "../assets/github_light.svg"
import sassSvg from "../assets/sass.svg"
import javascriptSvg from "../assets/javascript.svg"
import nodeSvg from "../assets/nodejs-icon-logo-svgrepo-com.svg"
import expressSvg from "../assets/expressjs.svg"
import mongoDBSvg from "../assets/mongo-svgrepo-com.svg"




function ProjectPage () {

const reactProject = () => {
 window.open("https://github.com/prayer-on/PROJECT-5.git", "_blank");
}

const backendProject = () => {
 window.open("https://github.com/prayer-on/PROJECT-6.git", "_blank");
}
    return (
        <main>
        <Card name= "FRONTEND" image_card= {Project_React} description= "A responsive frontend web application for property rentals. I used a JSON file to handle data dynamically and React Router to provide modern, seamless navigation between pages without refreshing, while leveraging Sass to ensure a clean and organized codebase."/>
        <div className="btn-container">
        <Button className="btn-language" onClick={reactProject} image_language={gitHubSvg}/> 
        <Button image_language={reactSvg}/>
        <Button image_language={sassSvg}/>
        <Button image_language={javascriptSvg}/>
        </div>

        <Card name= "BACKEND"image_card={Backend_Project} description="The backend was developed using Node.js and Express.js to ensure fast and dynamic interaction with the frontend. MongoDB was used as the database for flexible data management, leveraging Mongoose to create robust, structured schemas and models. For security, JWT was implemented for authentication, while bcrypt was used to hash and protect user credentials during login." />
        <div className="btn-container">
        <Button className="btn-language" onClick={backendProject} image_language={gitHubSvg}/> 
        <Button image_language={nodeSvg}/>
        <Button image_language={expressSvg}/>
        <Button image_language={mongoDBSvg}/>
        </div>
        </main>
    );
}

export default ProjectPage;
