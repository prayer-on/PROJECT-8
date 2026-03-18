import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home.jsx';
import PresentationPage from './Views/Presentation.jsx';
import SkillsPage from './Views/Skills.jsx';
import ContactPage from './Views/Contact.jsx'

function App() {

  return (
    <>
    <Home />
    <PresentationPage />
    <SkillsPage />
    <ContactPage/>
    </>
   
 
  )
}

export default App
