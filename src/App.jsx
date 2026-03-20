import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BannerPage from './Views/Banner.jsx';
import PresentationPage from './Views/presentation.jsx';
import SkillsPage from './Views/Skills.jsx';
import ContactPage from './Views/Contact.jsx';
import WelcomePage from './Views/Welcome.jsx';

function App() {

  return (
    <>
    <BannerPage />
    <WelcomePage />
    <PresentationPage />
    <SkillsPage />
    <ContactPage/>
    </>
   
 
  )
}

export default App
