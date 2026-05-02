import { createRoot } from 'react-dom/client'
import "@fortawesome/fontawesome-free/css/all.min.css"
import '../styles/index.css'
import Layout from '../composants/Layout'
import Home from '../composants/Home'
import Contact from './Contact'
import Erreur from './Erreur'
import Admin from './Admin'
import ProjetDetail from '../composants/ProjetDetail'
import Projets from '../composants/Projets'
import { BrowserRouter, Routes, Route } from "react-router"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/:type/:category" element={<Projets />} />
        <Route path="/:type/:category/:id" element={<ProjetDetail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Erreur />} />
      </Route>
    </Routes>
  </BrowserRouter>
)