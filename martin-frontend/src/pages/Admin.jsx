import { useState } from "react"

export default function Admin() {
  const [connecte, setConnecte] = useState(!!localStorage.getItem("token"))
  const [mdp, setMdp] = useState("")
  const [form, setForm] = useState({
    titre: "", categorie: "", type: "composition",
    description: "", image: "", prix: 0,
    difficulte: "", annee: "", duree: ""
  })
  const [message, setMessage] = useState("")

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

  async function handleSubmit() {
    try {
      const token = localStorage.getItem("token")
      const response = await fetch("http://localhost:5000/compositions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setMessage("Composition ajoutée ✓")
      setForm({ titre: "", categorie: "", type: "composition", description: "", image: "", prix: 0, difficulte: "", annee: "", duree: "" })
    } catch (error) {
      setMessage("Erreur")
    }
  }

  if (!connecte) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4 w-80">
        <h1 className="text-2xl font-bold uppercase tracking-widest">Admin</h1>
        <input
          type="password"
          placeholder="Mot de passe"
          className="bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 outline-none focus:border-white transition-colors"
          onChange={(e) => setMdp(e.target.value)}
        />
        {message && <p className="text-red-400 text-sm">{message}</p>}
        <button
          onClick={handleLogin}
          className="border border-white text-white py-3 px-8 uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          Connexion
        </button>
      </div>
    </div>
  )

  return (
    <div className="px-16 py-24">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold uppercase tracking-widest">Ajouter une composition</h1>
        <button onClick={handleLogout} className="text-gray-400 text-sm hover:text-white transition-colors">
          Déconnexion
        </button>
      </div>
      {message && <p className="text-green-400 mb-6">{message}</p>}
      <div className="flex flex-col gap-6 max-w-lg">
        {[
          { placeholder: "Titre", field: "titre" },
          { placeholder: "Catégorie (ex: brass-band)", field: "categorie" },
          { placeholder: "Image (URL)", field: "image" },
          { placeholder: "Prix", field: "prix" },
          { placeholder: "Difficulté", field: "difficulte" },
          { placeholder: "Année", field: "annee" },
          { placeholder: "Durée (ex: 7min)", field: "duree" },
        ].map(({ placeholder, field }) => (
          <input
            key={field}
            placeholder={placeholder}
            value={form[field]}
            className="bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 outline-none focus:border-white transition-colors"
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          />
        ))}
        <select
          value={form.type}
          className="bg-black border-b border-gray-600 py-3 text-white outline-none"
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="composition">Composition</option>
          <option value="arrangement">Arrangement</option>
        </select>
        <textarea
          placeholder="Description"
          rows={4}
          value={form.description}
          className="bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 outline-none focus:border-white transition-colors resize-none"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button
          onClick={handleSubmit}
          className="border border-white text-white py-3 px-8 uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 self-start"
        >
          Ajouter
        </button>
      </div>
    </div>
  )
}