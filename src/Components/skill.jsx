import Language from "./language.jsx";
import reactSvg from "../assets/react_dark.svg"
import javascriptSvg from "../assets/javascript.svg"
import typescriptSvg from "../assets/typescript.svg"
import htmlSvg from "../assets/html5.svg"
import cssSvg from "../assets/css_old.svg"
import nodeSvg from "../assets/nodejs-icon-logo-svgrepo-com.svg"
import expressSvg from "../assets/expressjs.svg"
import mongoDBSvg from "../assets/mongo-svgrepo-com.svg"
import illustratorSvg from "../assets/illustrator.svg"
import photoshopSvg from "../assets/photoshop.svg"
import notionSvg from "../assets/notion.svg"
import aiSvg from "../assets/openai.svg"
import sassSvg from "../assets/sass.svg"
import gitHubSvg from "../assets/github_light.svg"
import gitSvg from "../assets/git.svg"
import vercelSvg from "../assets/vercel.svg"
import renderSvg from "../assets/render_black.svg"



function Skill () {
    return(
<>
<div id="skills" className="wrapper-frontend">
    <Language image={htmlSvg} name="Html"/>
    <Language image={cssSvg} name="Css"/>
    <Language image={javascriptSvg} name="JavaScript"/>
    <Language image={typescriptSvg} name="TypeScript"/>
    <Language image={reactSvg} name="React.js"/>
    <Language image={sassSvg} name="Sass"/>
</div>

<div className="wrapper-backend">
    <Language image={nodeSvg} name="Node.js"/>
    <Language image={expressSvg} name="Express.js"/>
    <Language image={mongoDBSvg} name="MongoDB"/>
</div>

<div className="wrapper-tools">
    <Language image={notionSvg} name="Notion"/>
    <Language image={aiSvg} name="ChatGPT"/>
    <Language image={gitHubSvg} name="GitHub"/>
    <Language image={gitSvg} name="Git"/>
    <Language image={vercelSvg} name="Vercel"/>
    <Language image={renderSvg} name="Render"/>
</div>

<div className="wrapper-adobe">
    <Language image={illustratorSvg} name="Illustrator"/>
    <Language image={photoshopSvg} name="PhotoShop"/>
</div>




</>
    );
}

export default Skill