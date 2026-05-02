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
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-black z-50">
      <div>
        <Link to="/" className="text-white text-sm tracking-widest uppercase font-light">
          Martin Lièvre
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <DropDown titre="Compositions">
          {compCategories.map(cat => (
            <Link key={cat.slug} to={`/compositions/${cat.slug}`} className="block text-white text-sm py-1 hover:text-gray-300">
              {cat.name}
            </Link>
          ))}
        </DropDown>

        <DropDown titre="Arrangements">
          {arrCategories.map(cat => (
            <Link key={cat.slug} to={`/arrangements/${cat.slug}`} className="block text-white text-sm py-1 hover:text-gray-300">
              {cat.name}
            </Link>
          ))}
        </DropDown>

        <Link to="/contact" className="text-white text-sm tracking-widest uppercase hover:text-gray-300">
          Contact
        </Link>
      </div>
    </header>
  )
}