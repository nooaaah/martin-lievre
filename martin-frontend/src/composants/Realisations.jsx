import { useEffect, useState } from "react"
import { Link } from "react-router"

export default function Realisations() {
  const [projets, setProjets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/compositions")
        const result = await response.json()
        setProjets(result)
      } catch(error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if(loading) return <p className="text-gray-600 px-12 py-8 text-xs tracking-[2px]">Chargement...</p>

  return (
    <div className="px-12 py-24" style={{borderTop: '1px solid #1a1a1a'}}>
      <p className="text-gray-600 text-xs tracking-[3px] uppercase mb-4">Réalisations</p>
      <h2 className="text-3xl font-light text-white mb-4">Mes réalisations</h2>
      <p className="text-gray-600 text-sm mb-16">Si l'une de mes pièces vous intéresse, vous pouvez me la commander via mon formulaire de contact.</p>
      <div className="grid grid-cols-3 gap-12">
        {projets.map((p) => (
          <Link to={`/${p.type}/${p.categorie}/${p._id}`} key={p._id} className="group cursor-pointer">
            <div className="w-full h-64 overflow-hidden mb-4">
              <img
                src={p.image || "https://picsum.photos/400/300"}
                alt={p.titre}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-gray-600 text-xs tracking-[2px] uppercase mb-2">{p.categorie}</p>
            <h3 className="text-white font-light text-lg">{p.titre}</h3>
            <p className="text-gray-500 text-sm mt-1">{p.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}