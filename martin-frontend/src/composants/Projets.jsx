import { useParams, Link } from "react-router"
import { useEffect, useState } from "react"

export default function Projets() {
  const { type, category } = useParams()
  const [projets, setProjets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/compositions/${category}`)
        const result = await response.json()
        setProjets(result)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [category])

  if (loading) return <p className="text-gray-400 px-6 py-8 text-xs tracking-[2px]">Chargement...</p>

  return (
    <div className="px-6 lg:px-12 py-16 lg:py-24 pt-32">
      <p className="text-gray-400 text-xs tracking-[3px] uppercase mb-4">{type}</p>
      <h1 className="text-3xl lg:text-5xl font-light text-white mb-12 lg:mb-16">{category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {projets.map((p) => (
          <Link to={`/${type}/${category}/${p._id}`} key={p._id} className="cursor-pointer block">
            <img
              loading="lazy"
              src={p.image}
              alt={p.titre}
              className="w-full mb-4"
              style={{maxHeight: '300px', objectFit: 'contain'}}
            />
            <p className="text-gray-400 text-xs tracking-[2px] uppercase mb-2">{p.categorie}</p>
            <h3 className="text-white font-light text-xl">{p.titre}</h3>
            <p className="text-gray-300 text-sm mt-2 leading-relaxed">{p.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}