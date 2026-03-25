import Card from '../Components/card.jsx'
import Button from '../Components/button.jsx'
import Project_React from '../assets/react_project.png'
import reactSvg from "../assets/react_dark.svg"
import gitHubSvg from "../assets/github_light.svg"
import sassSvg from "../assets/sass.svg"
import javascriptSvg from "../assets/javascript.svg"
import nodeSvg from "../assets/nodejs-icon-logo-svgrepo-com.svg"
import expressSvg from "../assets/expressjs.svg"
import mongoDBSvg from "../assets/mongo-svgrepo-com.svg"
import html from "../assets/html.jpg"




function ProjectPage () {

const reactProject = () => {
 window.open("https://github.com/prayer-on/PROJECT-5.git", "_blank");
}

const backendProject = () => {
 window.open("https://github.com/prayer-on/PROJECT-6.git", "_blank");
}
    return (
        <main>
        <Card image_card= {Project_React} description= "A responsive frontend web application for property rentals. I used a JSON file to handle data dynamically and React Router to provide modern, seamless navigation between pages without refreshing, while leveraging Sass to ensure a clean and organized codebase."/>
        <div className="btn-container">
        <Button className="btn-language" onClick={reactProject} image_language={gitHubSvg}/> 
        <Button image_language={reactSvg}/>
        <Button image_language={sassSvg}/>
        <Button image_language={javascriptSvg}/>
        </div>

        <Card image_card= {html} description="The backend was developed using the Node.js server with the Express.js application to create a dynamic and fast interaction with the interface. MongoDB was used as a database to manage data flexibly, coupled with the mongoose library to create a robust structured schema and model the database. To secure data, JWT was implemented to verify the authentication and bcrypt to protect the login in access. " />
        <div className="btn-container">
        <Button className="btn-language" onClick={backendProject} image_language={gitHubSvg}/> 
        <Button image_language={nodeSvg}/>
        <Button image_language={expressSvg}/>
        <Button image_language={mongoDBSvg}/>
        </div>
        </main>
    );
}

/* write the description for the 2 project */

export default ProjectPage;