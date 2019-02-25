const IntentionPurchase = require('../models/IntentionPurchase')
const Purchase = require('../models/Ad')

class IntentionPurchaseController {
  async index (req, res) {
    const filters = {}

    if (req.query.title) {
      filters.title = new RegExp(req.query.title, 'i')
    }

    const intentions = await IntentionPurchase.paginate(filters, {
      page: req.query.page || 1,
      limit: 20,
      populate: ['author', 'user'],
      sort: '-createdAt'
    })

    return res.json(intentions)
  }

  async show (req, res) {
    const intention = await IntentionPurchase.findById(req.params.id)

    return res.json(intention)
  }

  async update (req, res) {
    const intention = await IntentionPurchase.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    )

    return res.json(intention)
  }

  async accept (req, res) {
    const purchaseaccepted = await Purchase.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    )

    return res.json(purchaseaccepted)
  }

  async destroy (req, res) {
    await IntentionPurchase.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

module.exports = new IntentionPurchaseController()
