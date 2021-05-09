const mongoose = require('mongoose');

const imgSchema = mongoose.Schema({
  title: { type: String, required: false },
//   tag: { type: String, required: false },
//   resume: { type: String, required: false },
  img: { type: String, required: false },
  imageUrl: { type: String, required: false},
//   date: { type: Date, required: false },
//   idDate : {type: Number, required: true}
});

module.exports = mongoose.model('Img', imgSchema);