const mongoose = require('mongoose');

const passSchema = mongoose.Schema({
  password: { type: String, required: true },
  name: {type: String, required: true}
});


module.exports = mongoose.model('Pass', passSchema);