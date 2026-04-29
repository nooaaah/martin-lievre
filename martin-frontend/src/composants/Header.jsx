import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DropDown from "./DropDown";
import "../styles/header.scss";

export default function Header() {
  const [compCategories, setCompCategories] = useState([]);
  const [arrCategories, setArrCategories] = useState([]);

  useEffect(() => {
    const cached = sessionStorage.getItem("menuData");

    if (cached) {
      const data = JSON.parse(cached);
      setCompCategories(data.comp || []);
      setArrCategories(data.arr || []);
    } else {
      Promise.all([
        fetch("https://martinlievre.ch/wp-json/wp/v2/categorie_compositions").then(r => r.json()),
        fetch("https://martinlievre.ch/wp-json/wp/v2/categorie_arrangements").then(r => r.json())
      ]).then(([comp, arr]) => {
        
        // sécurité anti crash
        const compFiltered = Array.isArray(comp)
          ? comp.filter(c => c.count > 0)
          : [];

        const arrFiltered = Array.isArray(arr)
          ? arr.filter(c => c.count > 0)
          : [];

        setCompCategories(compFiltered);
        setArrCategories(arrFiltered);

        sessionStorage.setItem(
          "menuData",
          JSON.stringify({ comp: compFiltered, arr: arrFiltered })
        );
      });
    }
  }, []);
  console.log("compCategories:", compCategories);

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
            <Link key={cat.id} to={`/compositions/${cat.slug}`}>
              {cat.name}
            </Link>
          ))}
        </DropDown>

        {/* ARRANGEMENTS */}
        <DropDown titre="Arrangements">
          {arrCategories.map(cat => (
            <Link key={cat.id} to={`/arrangements/${cat.slug}`}>
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