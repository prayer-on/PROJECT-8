import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BannerPage from './Views/Banner.jsx';
import PresentationPage from './Views/Presentation.jsx';
import SkillsPage from './Views/Skills.jsx';
import ContactPage from './Views/Contact.jsx'

function App() {

  return (
    <>
    <BannerPage />
    <PresentationPage />
    <SkillsPage />
    <ContactPage/>
    </>
   
 
  )
}

export default App
