const { Schema } = require('mongoose')

const Movie = new Schema(
  {
   title: {type: String, required: true},
   contentRating: {type: String, required: true},
   runTime: {type:Number, required: true },
   yearReleased: {type: Number, required: true},
   description: {type:String, required: true},
   poster: {type: String, required:true},
   actor: {type: Schema.Types.ObjectId, ref:'Actor'},
   review: {type: Schema.Types.ObjectId, ref:'Review'},
   review2: {type: Schema.Types.ObjectId, ref:'Review'}

  },
  { timestamps: true }
)

module.exports = Movie