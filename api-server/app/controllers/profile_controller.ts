import UserTransformer from '#transformers/user_transformer'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProfileController {
  /**
   * @show
   * @description Obtiene el perfil del usuario autenticado
   * @responseBody 200 - {"id": 1, "fullName": "John Doe", "email": "john@example.com"}
   * @responseBody 401 - {"errors": [{"message": "No autenticado"}]}
   * @security bearerAuth
   */
  async show({ auth, serialize }: HttpContext) {
    return serialize(UserTransformer.transform(auth.getUserOrFail()))
  }

}
