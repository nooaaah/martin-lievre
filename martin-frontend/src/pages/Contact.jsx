import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" })
  const [envoye, setEnvoye] = useState(false)

  async function handleSubmit() {
    console.log("URL:", import.meta.env.VITE_API_URL)
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
      const data = await response.json()
      console.log("réponse:", data)
      if (data.message === "message envoyé") setEnvoye(true)
    } catch (error) {
      console.log("erreur:", error)
    }
  }

  if (envoye) return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div>
        <div style={{width: '30px', height: '1px', background: '#fff', marginBottom: '24px'}}></div>
        <p className="text-white text-xs tracking-[3px] uppercase">Message envoyé</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="w-full" style={{maxWidth: '500px'}}>
        <p className="text-gray-400 text-xs tracking-[3px] uppercase mb-6">Contact</p>
        <div style={{width: '30px', height: '1px', background: '#fff', marginBottom: '32px'}}></div>
        <h1 className="text-3xl lg:text-4xl font-light text-white mb-10 lg:mb-12">Prendre contact</h1>
        <div className="flex flex-col gap-8">
          <input
            placeholder="Nom"
            className="bg-transparent py-3 text-white placeholder-gray-700 outline-none text-sm w-full"
            style={{borderBottom: '1px solid #222'}}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
          />
          <input
            placeholder="Email"
            className="bg-transparent py-3 text-white placeholder-gray-700 outline-none text-sm w-full"
            style={{borderBottom: '1px solid #222'}}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="bg-transparent py-3 text-white placeholder-gray-700 outline-none resize-none text-sm w-full"
            style={{borderBottom: '1px solid #222'}}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button
            onClick={handleSubmit}
            className="text-white text-xs tracking-[3px] uppercase py-4 px-10 hover:bg-white hover:text-black transition-all duration-300 self-start mt-4"
            style={{border: '1px solid #333'}}
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  )
}