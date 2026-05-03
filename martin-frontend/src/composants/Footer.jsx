import { Link } from "react-router"

export default function Footer() {
  return (
    <footer className="flex justify-between items-center px-12 py-8" style={{borderTop: '1px solid #1a1a1a'}}>
      <span className="text-gray-600 text-xs tracking-[4px] uppercase">ML</span>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-white transition-colors">
        <i className="fa-brands fa-instagram text-lg"></i>
      </a>
      <div className="flex gap-8">
        <Link to="/mentions-legales" className="text-gray-600 text-xs tracking-[2px] uppercase hover:text-white transition-colors">
          Mentions légales
        </Link>
        <Link to="/confidentialite" className="text-gray-600 text-xs tracking-[2px] uppercase hover:text-white transition-colors">
          Termes & Confidentialité
        </Link>
      </div>
    </footer>
  )
}