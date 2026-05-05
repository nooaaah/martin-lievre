require("dotenv").config()
const jwt = require("jsonwebtoken")
const Composition = require("./models/Composition")
const Message = require("./models/Message")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()


app.use(cors())
app.use(express.json())



mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB connecté"))
.catch((err)=>console.log(err))


function verifierToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1]
  if (!token) return res.status(401).json({ message: "Non autorisé" })
  try {
    jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch {
    res.status(401).json({ message: "Token invalide" })
  }
}


app.get("/compositions", async(req,res)=>{
  try{
    const composition = await Composition.find()
    res.json(composition)
  } catch(error){
    res.json({message: "erreur"})
  }
})

app.get("/compositions/detail/:id", async (req, res) => {
  try {
    const composition = await Composition.findById(req.params.id)
    res.json(composition)
  } catch (error) {
    res.json({ message: "erreur" })
  }
})

app.get("/compositions/:categorie", async (req, res) => {
  try {
    const compositions = await Composition.find({ categorie: req.params.categorie })
    res.json(compositions)
  } catch (error) {
    res.json({ message: "erreur" })
  }
})

app.get("/categories", async (req, res) => {
  try {
    const compositions = await Composition.distinct("categorie")
    const arrangements = await Composition.distinct("categorie", { type: "arrangement" })
    res.json({ compositions, arrangements })
  } catch (error) {
    res.json({ message: "erreur" })
  }
})


app.post("/compositions", verifierToken, async (req, res) => {
  try{
    const composition = new Composition(req.body)
    await composition.save()
    res.json({message: "composition sauvegardé"})
  } catch(error){
    res.json({message: "erreur"})
  }
})

app.post("/contact", async (req, res) => {
  try {
    const message = new Message(req.body)
    await message.save()
    res.json({ message: "message envoyé" })
  } catch (error) {
    res.json({ message: "erreur" })
  }
})


app.post("/admin/login", (req, res) => {
  const { password } = req.body
  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Mot de passe incorrect" })
  }
  const token = jwt.sign({ admin: true }, process.env.JWT_SECRET, { expiresIn: "365d" })
  res.json({ token })
})

app.put("/compositions/:id", verifierToken, async (req, res) => {
  try {
    const composition = await Composition.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(composition)
  } catch (error) {
    res.json({ message: "erreur" })
  }
})

app.delete("/compositions/:id", verifierToken, async (req, res) => {
  try {
    await Composition.findByIdAndDelete(req.params.id)
    res.json({ message: "composition supprimée" })
  } catch (error) {
    res.json({ message: "erreur" })
  }
})





app.listen(process.env.PORT, ()=>console.log("serveur connecté sur le port "))