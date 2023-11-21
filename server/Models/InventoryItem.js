const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventoryItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  price: {
    type: Number,
    required: false,
    min: 0
  },
  category: {
    type: String,
    required: false
  },
  supplier: {
    type: String,
    required: false
  },
  purchaseDate: {
    type: Date,
    required: false
  },
  expirationDate: {
    type: Date,
    required: false
  },
  imageUrl: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  tags: [{
    type: String
  }],
  // Add any other relevant fields
});

module.exports = mongoose.model('InventoryItem', inventoryItemSchema);
