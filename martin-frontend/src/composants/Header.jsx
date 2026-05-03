import { Link } from "react-router"
import { useState, useEffect } from "react";
import DropDown from "./DropDown";


export default function Header() {
  const [compCategories, setCompCategories] = useState([]);
  const [arrCategories, setArrCategories] = useState([]);

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
  <header className="fixed top-0 left-0 w-full z-50 px-12 py-6" 
  style={{
    borderBottom: '1px solid #1a1a1a',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)'
  }}>
    <div className="flex justify-between items-center">
      <Link to="/" className="text-white text-xs tracking-[4px] uppercase font-light hover:text-gray-400 transition-colors">
        Martin Lièvre
      </Link>
      <div className="flex items-center gap-10">
        <DropDown titre="Compositions">
          {compCategories.map(cat => (
            <Link key={cat.slug} to={`/compositions/${cat.slug}`} className="block text-gray-500 text-xs py-1 tracking-[2px] uppercase hover:text-white transition-colors">
              {cat.name}
            </Link>
          ))}
        </DropDown>
        <DropDown titre="Arrangements">
          {arrCategories.map(cat => (
            <Link key={cat.slug} to={`/arrangements/${cat.slug}`} className="block text-gray-500 text-xs py-1 tracking-[2px] uppercase hover:text-white transition-colors">
              {cat.name}
            </Link>
          ))}
        </DropDown>
        <Link to="/contact" className="text-gray-500 text-xs tracking-[2px] uppercase hover:text-white transition-colors">
          Contact
        </Link>
      </div>
    </div>
  </header>
)
}