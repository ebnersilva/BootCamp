const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const IntentionPurchase = new mongoose.Schema({
  idPurchase: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAtAd: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

IntentionPurchase.plugin(mongoosePaginate)

module.exports = mongoose.model('IntentionPurchase', IntentionPurchase)
