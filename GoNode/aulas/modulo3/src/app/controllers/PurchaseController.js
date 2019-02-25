const Ad = require('../models/Ad')
const IntentionPurchase = require('../models/IntentionPurchase')
const User = require('../models/User')
const PurchaseMail = require('../jobs/PurchaseMail')
const Queue = require('../services/Queue')

class PurchaseController {
  async store (req, res) {
    const { ad, content } = req.body
    const purchaseAd = await Ad.findById(ad).populate('author')
    const user = await User.findById(req.userId)

    if (!purchaseAd.accepted) {
      await IntentionPurchase.create({
        idPurchase: purchaseAd._id,
        title: purchaseAd.title,
        description: purchaseAd.description,
        price: purchaseAd.price,
        author: purchaseAd.author,
        createdAtAd: purchaseAd.createdAt,
        user
      })
    } else {
      return res.status(400).json({ error: `Ad expired` })
    }

    Queue.create(PurchaseMail.key, {
      ad: purchaseAd,
      user,
      content
    }).save()

    return res.send()
  }
}

module.exports = new PurchaseController()
