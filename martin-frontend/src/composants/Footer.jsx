import { Link } from "react-router"

export default function Footer() {
  return (
    <footer className="flex justify-between items-center px-16 py-8 border-t border-gray-800">
      
      <div>
        <span className="text-white text-sm tracking-widest">ML</span>
      </div>

      <div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <i className="fa-brands fa-instagram text-xl"></i>
        </a>
      </div>

      <div className="flex gap-6">
        <Link to="/mentions-legales" className="text-gray-400 text-sm hover:text-white transition-colors">
          Mentions légales
        </Link>
        <Link to="/confidentialite" className="text-gray-400 text-sm hover:text-white transition-colors">
          Termes & Confidentialité
        </Link>
      </div>

    </footer>
  )
}