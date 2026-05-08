import { useEffect, useState } from "react"
import { Link } from "react-router"

export default function Realisations() {
  const [projets, setProjets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/compositions`)
        const result = await response.json()
        setProjets(result)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <p className="text-gray-400 px-6 py-8 text-xs tracking-[2px]">Chargement...</p>

  return (
    <div className="px-6 lg:px-12 py-16 lg:py-24" style={{ borderTop: '1px solid #1a1a1a' }}>
      <p className="text-gray-400 text-xs tracking-[3px] uppercase mb-4">Réalisations</p>
      <h2 className="text-3xl font-light text-white mb-4">Mes réalisations</h2>
      <p className="text-gray-400 text-sm mb-12 lg:mb-16">Si l'une de mes pièces vous intéresse, vous pouvez me la commander via mon formulaire de contact.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {projets.map((p) => (
          <Link to={`/${p.type}/${p.categorie}/${p._id}`} key={p._id} className="cursor-pointer block">
            <img
              loading="lazy"
              src={p.image}
              alt={p.titre}
              className="w-full h-auto mb-4"
            />
            <p className="text-gray-400 text-xs tracking-[2px] uppercase mb-2">{p.categorie}</p>
            <h3 className="text-white font-light text-xl">{p.titre}</h3>
            <p className="text-gray-300 text-sm mt-1 leading-relaxed">{p.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}