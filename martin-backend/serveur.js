require("dotenv").config()
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



app.get("/compositions", async(req,res)=>{
  try{
    const composition = await Composition.find()
    res.json(composition)
  } catch(error){
    res.json({message: "erreur"})
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


app.post("/compositions", async(req,res)=>{
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


app.listen(process.env.PORT, ()=>console.log("serveur connecté sur le port "))