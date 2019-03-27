'use strict'

const Hash = use('Hash')
const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }

  async update ({ params, request, response }) {
    const user = await User.findOrFail(params.id)
    const data = request.only(['password', 'last_password', 'username'])

    if (data.last_password) {
      const isSame = await Hash.verify(data.last_password, user.password)

      if (!isSame) {
        return response.status(401).send({
          error: {
            message: 'A senha antiga não é válida'
          }
        })
      }

      if (!data.password) {
        return response.status(401).send({
          error: {
            message: 'Você não informou a nova senha'
          }
        })
      }

      delete data.last_password
    }

    if (!data.password) {
      delete data.password
    }

    user.merge(data)

    await user.save()

    return user
  }
}

module.exports = UserController
