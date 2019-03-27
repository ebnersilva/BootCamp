'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CalendarSchema extends Schema {
  up () {
    this.create('calendars', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('title')
      table.text('localization')
      table.datetime('date_time')
      table.timestamps()
    })
  }

  down () {
    this.drop('calendars')
  }
}

module.exports = CalendarSchema
