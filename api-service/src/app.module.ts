import { Module } from '@nestjs/common';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from './auth/auth';
import { UserModule } from './user/user.module';

@Module({
  imports: [
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
})
export class AppModule { }
