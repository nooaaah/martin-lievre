import { Link } from "react-router"
import { useState, useEffect } from "react";
import DropDown from "./DropDown";
import "../styles/header.scss";

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
    <header className="header">
      <div className="header__left">
        <Link to="/" className="header__title">
          Martin Lièvre
        </Link>
      </div>

      <div className="header__right">

        {/* COMPOSITIONS */}
        <DropDown titre="Compositions">
          {compCategories.map(cat => (
            <Link key={cat.slug} to={`/compositions/${cat.slug}`}>
              {cat.name}
            </Link>
          ))}
        </DropDown>

        {/* ARRANGEMENTS */}
        <DropDown titre="Arrangements">
          {arrCategories.map(cat => (
            <Link key={cat.slug} to={`/arrangements/${cat.slug}`}>
              {cat.name}
            </Link>
          ))}
        </DropDown>

        <Link to="/contact" className="contact-btn">
          Contact
        </Link>
      </div>
    </header>
  );
}