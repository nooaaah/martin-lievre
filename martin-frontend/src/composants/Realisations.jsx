import { useEffect, useState } from "react";

export default function Realisations() {
    const [projets, setProjets] =useState([])
    const [loading,setLoading] = useState(true)
    
    useEffect(()=>{
    async function fetchData(){
        
            try{
                const response = await fetch("http://localhost:5000/compositions")
                const result = await response.json()
                setProjets(result)

            } catch(error){
                console.log(error)
            } finally{
                setLoading(false)
            } 
        }
        fetchData()
    },[])

    if(loading){
        return <p>chargement...</p>
    }

  return (
    <div>
      {projets.map((p) => (
  <div key={p._id} className="card">
    <img src={p.image} alt={p.titre} />
    <h2>{p.titre}</h2>
    <p>{p.description}</p>
  </div>
))}
    </div>
  );
}