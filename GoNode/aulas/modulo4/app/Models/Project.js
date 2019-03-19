'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
  user () {
    return this.belongsTo('App/Models/User') // Pertence a 1 usuário
  }

  tasks () {
    return this.hasMany('App/Models/Task') // Tem muitas tarefas
  }
}

module.exports = Project
