import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from './auth/auth';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 5,
      },
      {
        name: 'medium',
        ttl: 60000,
        limit: 150,
      },
      {
        name: 'long',
        ttl: 3600000,
        limit: 2500,
      },
    ]),
    AuthModule.forRoot({
      auth,
      bodyParser: {
        json: true,
        urlencoded: { extended: true },
        rawBody: true,
      },
    }),
    UserModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
