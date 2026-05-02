import { useEffect, useState } from "react";

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

    if(loading) return <p className="text-white px-16 py-8">Chargement...</p>

    return (
        <div className="px-16 py-24 border-t border-gray-800">
            <h2 className="text-3xl font-bold mb-4">Mes réalisations</h2>
            <p className="text-gray-400 mb-12">Si l'une de mes pièces vous intéresse, vous pouvez me la commander via mon formulaire de contact !</p>
            <div className="grid grid-cols-3 gap-8">
                {projets.map((p) => (
                    <div key={p._id} className="group cursor-pointer">
                        <div className="w-full h-64 overflow-hidden mb-4">
                            <img 
                                src={p.image || "https://picsum.photos/400/300"} 
                                alt={p.titre} 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <h3 className="text-white font-bold">{p.titre}</h3>
                        <p className="text-gray-400 text-sm mt-1">{p.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}