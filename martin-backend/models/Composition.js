const mongoose = require("mongoose")

const compositionSchema = new mongoose.Schema({
    titre: String,
    categorie: String,
    type: String,
    description: String,
    image: String,
    prix: Number,
})


module.exports = mongoose.model("composition", compositionSchema)