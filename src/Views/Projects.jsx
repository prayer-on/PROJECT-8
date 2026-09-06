import Card from '../Components/card.jsx'
import Button from '../Components/button.jsx'
import Frontend_Project from '../assets/kasa_project.png'
import Backend_Project from '../assets/book_project.png'
import Ecommerce_Project from '../assets/AUVE_ecommerce.png'
import reactSvg from "../assets/react_dark.svg"
import gitHubSvg from "../assets/github_light.svg"
import sassSvg from "../assets/sass.svg"
import javascriptSvg from "../assets/javascript.svg"
import vercelSvg from "../assets/vercel.svg"
import typecriptSvg from "../assets/typescript.svg"
import nodeSvg from "../assets/nodejs-icon-logo-svgrepo-com.svg"
import expressSvg from "../assets/expressjs.svg"
import mongoDBSvg from "../assets/mongo-svgrepo-com.svg"






function ProjectPage () {

const reactProject = () => {
 window.open("https://prayeronaiwukasa-website.vercel.app", "_blank");
}

const reactGitHub = () => {
 window.open("https://github.com/prayer-on/PROJECT-5.git", "_blank");
}

const backendProject = () => {
 window.open("https://book-shop-website-frontend.onrender.com", "_blank");
}

const backendGitHub = () => {
 window.open("https://github.com/prayer-on/PROJECT-6.git", "_blank");
}

const ecommerceProject = () => {
 window.open("https://auve-ecommerce.vercel.app/", "_blank");
}


const ecommerceGitHub = () => {
 window.open("https://github.com/prayer-on/AUVE---ecommerce", "_blank");
}


    return (
        <main>
        
        <Card name= "AUVE | E-COMMERCE"image_card={Ecommerce_Project} description="A modern, fully responsive full-stack e-commerce application built with the MERN stack and TypeScript. It features a sleek, intuitive user interface optimized for all screen sizes and is seamlessly integrated with Stripe to handle secure credit card, Apple Pay, and Google Pay transactions. Includes advanced dynamic cart management and secure user authentication." />
        <div className="btn-container">
        <Button className="btn-language" onClick={ecommerceProject} image_language={vercelSvg} alt="Vercel logo"/>
        <Button className="btn-language" onClick={ecommerceGitHub} image_language={gitHubSvg} alt="GitHub logo"/>
        <Button image_language={reactSvg} alt="React.js logo"/>
        <Button image_language={typecriptSvg} alt="Typescript logo"/>
        <Button image_language={sassSvg} alt="Sass logo"/> 
        <Button image_language={nodeSvg} alt="Node.js logo"/>
        <Button image_language={expressSvg} alt="Express.js logo"/>
        <Button image_language={mongoDBSvg} alt="MongoDB logo"/>
        </div>

        <Card name= "KASA" image_card= {Frontend_Project} description= "A responsive frontend web application for property rentals. I used a JSON file to handle data dynamically and React Router to provide modern, seamless navigation between pages without refreshing, while leveraging Sass to ensure a clean and organized codebase."/>
        <div className="btn-container">
        <Button className="btn-language" onClick={reactProject} image_language={vercelSvg} alt="Vercel logo"/>
        <Button className="btn-language" onClick={reactGitHub} image_language={gitHubSvg} alt="GitHub logo"/> 
        <Button image_language={reactSvg} alt="React.js logo"/>
        <Button image_language={sassSvg} alt="Sass logo"/>
        <Button image_language={javascriptSvg} alt="JavaScript logo"/>
        </div>

        <Card name= "BOOKS"image_card={Backend_Project} description="The backend was developed using Node.js and Express.js to ensure fast and dynamic interaction with the frontend. MongoDB was used as the database for flexible data management, leveraging Mongoose to create robust, structured schemas and models. For security, JWT was implemented for authentication, while bcrypt was used to hash and protect user credentials during login." />
        <div className="btn-container">
        <Button className="btn-language" onClick={backendProject} image_language={vercelSvg} alt="Vercel logo"/>
        <Button className="btn-language" onClick={backendGitHub} image_language={gitHubSvg} alt="GitHub logo"/> 
        <Button image_language={nodeSvg} alt="Node.js logo"/>
        <Button image_language={expressSvg} alt="Express.js logo"/>
        <Button image_language={mongoDBSvg} alt="MongoDB logo"/>
        </div>
        </main>
    );
}

export default ProjectPage;
