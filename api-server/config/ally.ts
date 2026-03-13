import env from '#start/env'
import { defineConfig, services } from '@adonisjs/ally'

export default defineConfig({
    facebook: services.facebook({
        clientId: env.get('FACEBOOK_CLIENT_ID'),
        clientSecret: env.get('FACEBOOK_CLIENT_SECRET'),
        callbackUrl: 'http://localhost:3333/facebook/callback',
    }),
    google: services.google({
        clientId: env.get('GOOGLE_CLIENT_ID'),
        clientSecret: env.get('GOOGLE_CLIENT_SECRET'),
        callbackUrl: 'http://localhost:3333/google/callback',
    }),
})