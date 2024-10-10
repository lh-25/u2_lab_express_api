const { Schema } = require('mongoose')

const  Review = new Schema(
  {
    score: { type: Number, enum: [1,2,3,4,5],required: true },
    comment: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Review