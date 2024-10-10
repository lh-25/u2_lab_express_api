const mongoose = require('mongoose')
const actorSchema = require('./actor')
const movieSchema = require('./movie')
const reviewSchema = require('./review')

const Actor = mongoose.model('Actor', actorSchema)
const Movie = mongoose.model('Movie', movieSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = {
    Actor,
    Movie,
    Review
}
