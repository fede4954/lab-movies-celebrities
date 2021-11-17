const { Schema, model } = require('mongoose')

const movieSchema = new Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    plot: { type: String },
    cast: [{ type: Schema.types.ObjectId, ref: 'Celebrity' }] //Array that stores IDs of Celebrity documents
})

const Movie = model('Movie', movieSchema)

module.exports = Movie