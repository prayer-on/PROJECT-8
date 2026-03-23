import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BannerPage from './Views/Banner.jsx';
import WelcomePage from './Views/Welcome.jsx';
import PresentationPage from './Views/presentation.jsx';
import PortfolioPage from './Views/Portfolio.jsx';
import SkillsPage from './Views/Skills.jsx';
import ContactPage from './Views/Contact.jsx';

function App() {

  return (
    <>
    <BannerPage />
    <WelcomePage />
    <PresentationPage />
    <PortfolioPage />
    <SkillsPage />
    <ContactPage />
    </>
   
 
  )
}

export default App
