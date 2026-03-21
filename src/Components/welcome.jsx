import gitHubSvg from "../assets/github_light.svg"

function Welcome () {
    return(
        <header>
            <h1>PRAYER ONAIWU</h1>
            <div>A 22-year-old <strong><em>frontend developer</em></strong> who recently fell in love with the web development world. Excited to build <strong><em>responsive, accessible and engaging UX/UI.</em></strong></div>
            <div className="wrapper-button">
            <button>Contact Me</button>
            <button><img src={gitHubSvg} /></button>
            </div>
        </header>
    );
}

export default Welcome