import { Link } from "react-router"

export default function Footer() {
  return (
    <footer className="px-6 lg:px-12 py-8" style={{borderTop: '1px solid #1a1a1a'}}>
  <div className="flex justify-between items-center">
    <span className="text-gray-600 text-xs tracking-[4px] uppercase">ML</span>
    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-white transition-colors">
      <i className="fa-brands fa-instagram text-lg"></i>
    </a>
    <div className="flex flex-col gap-1 text-right">
      <Link to="/mentions-legales" className="text-gray-600 text-xs hover:text-white transition-colors">
        Mentions légales
      </Link>
      <Link to="/confidentialite" className="text-gray-600 text-xs hover:text-white transition-colors">
        Termes & Confidentialité
      </Link>
    </div>
  </div>
</footer>
  )
}