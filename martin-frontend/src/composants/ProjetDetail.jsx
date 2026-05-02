import { useParams } from "react-router"
import { useEffect, useState } from "react"

export default function ProjetDetail() {
  const { id } = useParams()
  const [projet, setProjet] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:5000/compositions/detail/${id}`)
        const result = await response.json()
        setProjet(result)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id])

  if (loading) return <p className="text-white px-16 py-8">Chargement...</p>
  if (!projet) return <p className="text-white px-16 py-8">Projet introuvable</p>

  return (
    <div className="min-h-screen px-16 py-24">
      <h1 className="text-4xl font-bold mb-12 uppercase tracking-widest">{projet.categorie}</h1>
      <div className="flex justify-between gap-16">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold mb-6">{projet.titre}</h2>
          <p className="text-gray-300 mb-6">{projet.description}</p>
          {projet.difficulte && projet.annee && projet.duree && (
            <p className="text-gray-400 italic mb-8">
              {projet.difficulte} / {projet.annee} / {projet.duree}
            </p>
          )}
          {projet.audio && (
            <audio controls className="w-full mb-8">
              <source src={projet.audio} />
            </audio>
          )}
          <button className="border border-white text-white py-3 px-8 uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            Acheter
          </button>
        </div>
        <div className="w-96 h-96 flex-shrink-0">
          <img
            src={projet.image || "https://picsum.photos/400/400"}
            alt={projet.titre}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}