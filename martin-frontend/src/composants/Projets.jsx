import { useParams } from "react-router"
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

  if (loading) return <p>chargement...</p>

  return (
    <div>
      <h1>{type} - {category}</h1>
      {projets.map((p) => (
        <div key={p._id} className="card">
          <img src={p.image} alt={p.titre} />
          <h2>{p.titre}</h2>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  )
}