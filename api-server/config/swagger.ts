import path from 'node:path'
import url from 'node:url'

export default {
  path: path.dirname(url.fileURLToPath(import.meta.url)) + '/../',
  title: 'Ovis API',
  version: '1.0.0',
  tagIndex: 2,
  snakeCase: true,
  ignore: ['/docs', '/swagger'],
  preferredPutPatch: 'PUT',
  common: {
    parameters: [],
    headers: {},
  },
  securitySchemes: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
  },
  authMiddlewares: ['auth', 'auth:api'],
  defaultSecurityScheme: 'bearerAuth',
  persistAuthorization: true,
  showSummary: true,
}