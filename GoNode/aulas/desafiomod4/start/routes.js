'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.store').validator('User')
Route.put('/users/:id', 'UserController.update')

Route.post('/sessions', 'SessionController.store')

Route.group(() => {
  Route.resource('calendars', 'CalendarController').apiOnly()
}).middleware(['auth'])
