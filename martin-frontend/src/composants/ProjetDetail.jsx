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

  if (loading) return <p className="text-gray-600 px-12 py-8 text-xs tracking-[2px]">Chargement...</p>
  if (!projet) return <p className="text-gray-600 px-12 py-8">Projet introuvable</p>

  return (
    <div className="min-h-screen px-12 py-24 pt-32">
      <p className="text-gray-600 text-xs tracking-[3px] uppercase mb-16">{projet.categorie}</p>
      <div className="flex justify-between gap-24">
        <div style={{maxWidth: '600px'}}>
          <h1 className="text-5xl font-light text-white mb-8">{projet.titre}</h1>
          <p className="text-gray-400 leading-relaxed mb-8">{projet.description}</p>
          {projet.difficulte && (
            <p className="text-gray-600 text-sm italic mb-10">
              {projet.difficulte}{projet.annee && ` / ${projet.annee}`}{projet.duree && ` / ${projet.duree}`}
            </p>
          )}
          {projet.audio && (
            <audio controls className="w-full mb-10">
              <source src={projet.audio} />
            </audio>
          )}
          <button className="text-white text-xs tracking-[3px] uppercase py-4 px-10 hover:bg-white hover:text-black transition-all duration-300" style={{border: '1px solid #333'}}>
            Acheter
          </button>
        </div>
        <div className="flex-shrink-0" style={{width: '420px', height: '520px'}}>
          <img
            src={projet.image || "https://picsum.photos/400/500"}
            alt={projet.titre}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}