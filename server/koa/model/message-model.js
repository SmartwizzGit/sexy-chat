const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Message = new Schema({
  author: String,
  content: String,
  date: Date
});

const mySexyMessages = mongoose.model('Message', Message);

module.exports = mySexyMessages;
