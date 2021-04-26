const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title: { type: String, required: true },
//   tag: { type: String, required: false },
  resume: { type: String, required: false },
  body: { type: String, required: true },
  date: { type: Date, required: false },
  idDate : {type: Number, required: true}
});

module.exports = mongoose.model('Article', articleSchema);