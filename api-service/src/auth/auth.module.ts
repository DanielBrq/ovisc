// =========== Imports ===========
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { PrismaClient } from '../generated';
import { auth, prisma } from './auth';

// =========== Module ===========
@Module({
  providers: [
    AuthService,
    AuthRepository,
    {
      provide: PrismaClient,
      useValue: prisma,
    },
    {
      provide: 'BETTER_AUTH',
      useValue: auth,
    },
  ],
  controllers: [AuthController],
  exports: [AuthService, AuthRepository],
})
export class AuthModule {}
