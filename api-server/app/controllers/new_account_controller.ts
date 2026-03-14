import User from '#models/user'
import { signupValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import UserTransformer from '#transformers/user_transformer'

export default class NewAccountController {

  /**
   * @store
   * @description Crea una nueva cuenta de usuario
   * @requestBody {"fullName": "John Doe", "email": "john@example.com", "password": "password123", "passwordConfirmation": "password123"}
   * @responseBody 201 - {"user": {"id": 1, "fullName": "John Doe", "email": "john@example.com"}, "token": "..."}
   * @responseBody 400 - {"errors": [{"message": "El campo email ya existe", "rule": "unique", "field": "email"}]}
   */
  async store({ request, serialize }: HttpContext) {
    const { fullName, email, password } = await request.validateUsing(signupValidator)

    const user = await User.create({ fullName, email, password })
    const token = await User.accessTokens.create(user)

    return serialize({
      user: UserTransformer.transform(user),
      token: token.value!.release(),
    })
  }
}
