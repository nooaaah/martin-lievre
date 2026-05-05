const mongoose = require("mongoose")

const compositionSchema = new mongoose.Schema({
  titre: String,
  categorie: String,
  type: String,
  description: String,
  image: String,
  audio: String,
  difficulte: String,
  annee: Number,
  duree: String,
})

module.exports = mongoose.model("Composition", compositionSchema)