const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  reply: { type: Boolean, default: false }
});

module.exports = recipientSchema;
