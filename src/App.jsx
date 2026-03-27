import BannerPage from './Views/Banner.jsx';
import WelcomePage from './Views/Welcome.jsx';
import PresentationPage from './Views/presentation.jsx';
import ProjectPage from './Views/Projects.jsx';
import SkillsPage from './Views/Skills.jsx';
import ContactPage from './Views/Contact.jsx';

function App() {

  return (
    <> 
    <BannerPage />
    <WelcomePage />
    <PresentationPage />
    <h1 className='title'>MY PROJECTS</h1>
    <ProjectPage />
    <h2 className='title'>MY SKILLS</h2>
    <SkillsPage />
    <ContactPage />
    </>
  )
}

export default App
