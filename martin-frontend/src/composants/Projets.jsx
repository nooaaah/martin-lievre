import { useParams, Link } from "react-router"
import { useEffect, useState } from "react"

export default function Projets() {
  const { type, category } = useParams()
  const [projets, setProjets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:5000/compositions/${category}`)
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

  if (loading) return <p className="text-gray-600 px-12 py-8 text-xs tracking-[2px]">Chargement...</p>

  return (
    <div className="px-12 py-24 pt-32">
      <p className="text-gray-600 text-xs tracking-[3px] uppercase mb-4">{type}</p>
      <h1 className="text-5xl font-light text-white mb-16">{category}</h1>
      <div className="grid grid-cols-3 gap-12">
        {projets.map((p) => (
          <Link to={`/${type}/${category}/${p._id}`} key={p._id} className="group cursor-pointer">
            <div className="w-full overflow-hidden mb-4" style={{height: '280px'}}>
              <img
                src={p.image || "https://picsum.photos/400/300"}
                alt={p.titre}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-gray-600 text-xs tracking-[2px] uppercase mb-2">{p.categorie}</p>
            <h3 className="text-white font-light text-xl">{p.titre}</h3>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">{p.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}