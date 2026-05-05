import { Link } from "react-router"
import { useState, useEffect } from "react"
import DropDown from "./DropDown"

export default function Header() {
  const [compCategories, setCompCategories] = useState([])
  const [arrCategories, setArrCategories] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("http://localhost:5000/categories")
        const data = await response.json()
        setCompCategories(data.compositions.map(cat => ({ slug: cat, name: cat })))
        setArrCategories(data.arrangements.map(cat => ({ slug: cat, name: cat })))
      } catch (error) {
        console.log(error)
      }
    }
    fetchCategories()
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 py-6"
      style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)',
        borderBottom: '1px solid #1a1a1a'
      }}>
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white text-xs tracking-[4px] uppercase font-light hover:text-gray-300 transition-colors">
          Martin Lièvre
        </Link>


        <div className="hidden lg:flex items-center gap-10">
          <DropDown titre="Compositions">
            {compCategories.map(cat => (
              <Link key={cat.slug} to={`/compositions/${cat.slug}`} className="block text-gray-300 text-xs py-1 tracking-[2px] uppercase hover:text-white transition-colors">
                {cat.name}
              </Link>
            ))}
          </DropDown>
          <DropDown titre="Arrangements">
            {arrCategories.map(cat => (
              <Link key={cat.slug} to={`/arrangements/${cat.slug}`} className="block text-gray-300 text-xs py-1 tracking-[2px] uppercase hover:text-white transition-colors">
                {cat.name}
              </Link>
            ))}
          </DropDown>
          <Link to="/contact" className="text-gray-300 text-xs tracking-[2px] uppercase hover:text-white transition-colors">
            Contact
          </Link>
        </div>


        <button className="lg:hidden text-white min-h-[44px] min-w-[44px] flex items-center justify-center" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>


      {menuOpen && (
        <div className="lg:hidden flex flex-col gap-6 pt-8 pb-4">
          <p className="text-gray-400 text-xs tracking-[2px] uppercase">Compositions</p>
          {compCategories.map(cat => (
            <Link key={cat.slug} to={`/compositions/${cat.slug}`}
              className="text-white text-xs tracking-[2px] uppercase pl-4"
              onClick={() => setMenuOpen(false)}>
              {cat.name}
            </Link>
          ))}
          <p className="text-gray-400 text-xs tracking-[2px] uppercase">Arrangements</p>
          {arrCategories.map(cat => (
            <Link key={cat.slug} to={`/arrangements/${cat.slug}`}
              className="text-white text-xs tracking-[2px] uppercase pl-4"
              onClick={() => setMenuOpen(false)}>
              {cat.name}
            </Link>
          ))}
          <Link to="/contact" className="text-white text-xs tracking-[2px] uppercase"
            onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}