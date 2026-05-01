import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" })

  async function handleSubmit() {
  try {
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className="contact">
      <h1>Contact</h1>
      <input
        placeholder="Nom"
        onChange={(e) => setForm({ ...form, nom: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        placeholder="Message"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button onClick={handleSubmit}>Envoyer</button>
    </div>
  )
}