const { Appointment, User } = require('../models')
const { Op } = require('sequelize')
const moment = require('moment')

class DashboardAppointmentController {
  async index (req, res) {
    const appointments = await Appointment.findAll({
      include: [{ model: User, as: 'user' }],
      where: {
        provider_id: req.session.user.id,
        date: {
          [Op.between]: [
            moment()
              .startOf('day')
              .format(),
            moment()
              .endOf('day')
              .format()
          ]
        }
      },
      order: [['date', 'ASC']]
    })
    return res.render('appointments/dashboard', { appointments })
  }
}

module.exports = new DashboardAppointmentController()
