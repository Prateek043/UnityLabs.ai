const mongoose = require('mongoose');

const catalogSchema = new mongoose.Schema({
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  catalogName: { type: String, required: true },
  products: [{ 
    "name":String,
    "price":Number
  }],
});

const Catalog = mongoose.model('Catalog', catalogSchema);

module.exports = Catalog;
