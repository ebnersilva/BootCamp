'use strict'

const Model = use('Model')

class Calendar extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Calendar
