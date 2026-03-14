import User from '#models/user'
import { loginValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import UserTransformer from '#transformers/user_transformer'

export default class AccessTokenController {
  /**
   * @store
   * @description Inicia sesion y genera un token de acceso
   * @requestBody {"email": "john@example.com", "password": "password123"}
   * @responseBody 200 - {"user": {"id": 1, "fullName": "John Doe", "email": "john@example.com"}, "token": "..."}
   * @responseBody 400 - {"errors": [{"message": "Credenciales invalidas", "rule": "auth", "field": "password"}]}
   */
  async store({ request, serialize }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user)

    return serialize({
      user: UserTransformer.transform(user),
      token: token.value!.release(),
    })
  }

  /**
   * @destroy
   * @description Cierra la sesion actual revocando el token
   * @responseBody 200 - {"message": "Logged out successfully"}
   * @responseBody 401 - {"errors": [{"message": "No autenticado"}]}
   * @security bearerAuth
   */
  async destroy({ auth }: HttpContext) {
    const user = auth.getUserOrFail()
    if (user.currentAccessToken) {
      await User.accessTokens.delete(user, user.currentAccessToken.identifier)
    }

    return {
      message: 'Logged out successfully',
    }
  }

}
