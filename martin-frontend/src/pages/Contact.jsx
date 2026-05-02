import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" })
  const [envoye, setEnvoye] = useState(false)

  async function handleSubmit() {
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
      const data = await response.json()
      if (data.message === "message envoyé") setEnvoye(true)
    } catch (error) {
      console.log(error)
    }
  }

  if (envoye) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-white text-2xl tracking-widest">Message envoyé ✓</p>
    </div>
  )

  return (
    <div className="min-h-screen flex items-center justify-center px-16">
      <div className="w-full max-w-lg">
        <h1 className="text-4xl font-bold mb-12 tracking-widest uppercase">Contact</h1>
        <div className="flex flex-col gap-6">
          <input
            placeholder="Nom"
            className="bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 outline-none focus:border-white transition-colors"
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
          />
          <input
            placeholder="Email"
            className="bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 outline-none focus:border-white transition-colors"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 outline-none focus:border-white transition-colors resize-none"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button
            onClick={handleSubmit}
            className="mt-4 border border-white text-white py-3 px-8 uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 self-start"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  )
}