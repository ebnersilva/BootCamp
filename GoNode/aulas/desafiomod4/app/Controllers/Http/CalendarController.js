'use strict'

const Calendar = use('App/Models/Calendar')

/**
 * Resourceful controller for interacting with calendars
 */
class CalendarController {
  /**
   * Show a list of all calendars.
   * GET calendars
   */
  async index ({ request, response }) {
    const { page, date } = request.get()

    let query = Calendar.query().with('user')

    if (date) {
      query = query.whereRaw(`"when"::date_time = ?`, date)
    }

    const events = await query.paginate(page)

    return events
  }

  /**
   * Create/save a new calendar.
   * POST calendars
   */
  async store ({ request, auth }) {
    const data = request.only(['title', 'localization', 'date_time'])

    const calendar = await Calendar.create({ ...data, user_id: auth.user.id })

    return calendar
  }

  /**
   * Display a single calendar.
   * GET calendars/:id
   */
  async show ({ params }) {
    const calendar = await Calendar.findOrFail(params.id)

    await calendar.load('user')

    return calendar
  }

  /**
   * Update calendar details.
   * PUT or PATCH calendars/:id
   */
  async update ({ params, request }) {
    const calendar = await Calendar.findOrFail(params.id)
    const data = request.only(['title', 'localization', 'date_time'])

    calendar.merge(data)

    await calendar.save()

    return calendar
  }

  /**
   * Delete a calendar with id.
   * DELETE calendars/:id
   */
  async destroy ({ params }) {
    const calendar = await Calendar.findOrFail(params.id)
    await calendar.delete()
  }
}

module.exports = CalendarController
