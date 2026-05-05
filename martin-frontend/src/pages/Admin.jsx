import { useState, useEffect } from "react"

export default function Admin() {
  const [connecte, setConnecte] = useState(!!localStorage.getItem("token"))
  const [mdp, setMdp] = useState("")
  const [compositions, setCompositions] = useState([])
  const [message, setMessage] = useState("")
  const [modeEdit, setModeEdit] = useState(null)
  const [form, setForm] = useState({
    titre: "", categorie: "", type: "composition",
    description: "", image: "", prix: 0,
    difficulte: "", annee: "", duree: ""
  })

  const champs = [
    { placeholder: "Titre *", field: "titre" },
    { placeholder: "Catégorie * (ex: brass-band)", field: "categorie" },
    { placeholder: "Image (URL)", field: "image" },
    { placeholder: "Audio (URL)", field: "audio" },
    { placeholder: "Difficulté", field: "difficulte" },
    { placeholder: "Année", field: "annee" },
    { placeholder: "Durée (ex: 7min)", field: "duree" },
  ]

  useEffect(() => {
    if (connecte) fetchCompositions()
  }, [connecte])

  async function fetchCompositions() {
    try {
      const response = await fetch("http://localhost:5000/compositions")
      const data = await response.json()
      setCompositions(data)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleLogin() {
    try {
      const response = await fetch("http://localhost:5000/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: mdp })
      })
      const data = await response.json()
      if (data.token) {
        localStorage.setItem("token", data.token)
        setConnecte(true)
      } else {
        setMessage(data.message)
      }
    } catch (error) {
      setMessage("Erreur de connexion")
    }
  }

  function handleLogout() {
    localStorage.removeItem("token")
    setConnecte(false)
  }

  function validerForm() {
    if (!form.titre.trim()) { setMessage("Le titre est obligatoire"); return false }
    if (!form.categorie.trim()) { setMessage("La catégorie est obligatoire"); return false }
    return true
  }

  async function handleSubmit() {
    if (!validerForm()) return
    try {
      const token = localStorage.getItem("token")
      const url = modeEdit
        ? `http://localhost:5000/compositions/${modeEdit}`
        : "http://localhost:5000/compositions"
      const method = modeEdit ? "PUT" : "POST"
      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify({...form, categorie: form.categorie.toLowerCase()})
      })
      setMessage(modeEdit ? "Composition modifiée ✓" : "Composition ajoutée ✓")
      setModeEdit(null)
      setForm({ titre: "", categorie: "", type: "composition", description: "", image: "", prix: 0, difficulte: "", annee: "", duree: "" })
      fetchCompositions()
    } catch (error) {
      setMessage("Erreur")
    }
  }

  async function handleDelete(id) {
    if (!confirm("Supprimer cette composition ?")) return
    try {
      const token = localStorage.getItem("token")
      await fetch(`http://localhost:5000/compositions/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      })
      fetchCompositions()
    } catch (error) {
      setMessage("Erreur")
    }
  }

  function handleEdit(p) {
    setModeEdit(p._id)
    setForm({
      titre: p.titre, categorie: p.categorie, type: p.type,
      description: p.description, image: p.image, prix: p.prix,
      difficulte: p.difficulte || "", annee: p.annee || "", duree: p.duree || ""
    })
    window.scrollTo(0, 0)
  }

  if (!connecte) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-6" style={{width: '400px'}}>
        <p className="text-gray-400 text-xs tracking-[3px] uppercase">Admin</p>
        <div style={{width: '30px', height: '1px', background: '#fff'}}></div>
        <input
          type="password"
          placeholder="Mot de passe"
          className="bg-transparent py-3 text-white placeholder-gray-700 outline-none text-sm"
          style={{borderBottom: '1px solid #222'}}
          onChange={(e) => setMdp(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
        />
        {message && <p className="text-red-400 text-xs tracking-[1px]">{message}</p>}
        <button onClick={handleLogin} className="text-white text-xs tracking-[3px] uppercase py-4 px-10 hover:bg-white hover:text-black transition-all duration-300 self-start" style={{border: '1px solid #333'}}>
          Connexion
        </button>
      </div>
    </div>
  )

  return (
    <div className="px-12 py-24">
      <div className="flex justify-between items-center mb-16">
        <div>
          <p className="text-gray-400 text-xs tracking-[3px] uppercase mb-4">Admin</p>
          <h1 className="text-4xl font-light text-white">
            {modeEdit ? "Modifier la composition" : "Ajouter une composition"}
          </h1>
        </div>
        <button onClick={handleLogout} className="text-gray-400 text-xs tracking-[2px] uppercase hover:text-white transition-colors">
          Déconnexion
        </button>
      </div>

      {message && <p className="text-green-400 text-xs tracking-[1px] mb-8">{message}</p>}

      <div className="flex flex-col gap-8 mb-24" style={{maxWidth: '500px'}}>
        {champs.map(({ placeholder, field }) => (
          <input
            key={field}
            placeholder={placeholder}
            value={form[field]}
            className="bg-transparent py-3 text-white placeholder-gray-700 outline-none text-sm"
            style={{borderBottom: '1px solid #222'}}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          />
        ))}
        <select
          value={form.type}
          className="bg-black py-3 text-white outline-none text-sm"
          style={{borderBottom: '1px solid #222'}}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="composition">Composition</option>
          <option value="arrangement">Arrangement</option>
        </select>
        <textarea
          placeholder="Description"
          rows={4}
          value={form.description}
          className="bg-transparent py-3 text-white placeholder-gray-700 outline-none resize-none text-sm"
          style={{borderBottom: '1px solid #222'}}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <div className="flex gap-4 mt-4">
          <button onClick={handleSubmit} className="text-white text-xs tracking-[3px] uppercase py-4 px-10 hover:bg-white hover:text-black transition-all duration-300" style={{border: '1px solid #333'}}>
            {modeEdit ? "Modifier" : "Ajouter"}
          </button>
          {modeEdit && (
            <button onClick={() => { setModeEdit(null); setForm({ titre: "", categorie: "", type: "composition", description: "", image: "", prix: 0, difficulte: "", annee: "", duree: "" }) }}
              className="text-gray-400 text-xs tracking-[3px] uppercase py-4 px-10 hover:text-white transition-colors">
              Annuler
            </button>
          )}
        </div>
      </div>

      <div style={{borderTop: '1px solid #1a1a1a', paddingTop: '48px'}}>
        <p className="text-gray-400 text-xs tracking-[3px] uppercase mb-10">Compositions existantes</p>
        <div className="flex flex-col gap-4">
          {compositions.map((p) => (
            <div key={p._id} className="flex justify-between items-center py-4" style={{borderBottom: '1px solid #1a1a1a'}}>
              <div>
                <p className="text-white text-sm">{p.titre}</p>
                <p className="text-gray-400 text-xs tracking-[2px] uppercase mt-1">{p.categorie} · {p.type}</p>
              </div>
              <div className="flex gap-6">
                <button onClick={() => handleEdit(p)} className="text-gray-400 text-xs tracking-[2px] uppercase hover:text-white transition-colors">
                  Modifier
                </button>
                <button onClick={() => handleDelete(p._id)} className="text-gray-400 text-xs tracking-[2px] uppercase hover:text-red-400 transition-colors">
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}