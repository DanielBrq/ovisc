import { auth } from '../auth/auth.js';
import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient } from '../generated';
// import { v7 as uuidv7 } from 'uuid';

@Injectable()
export class UserRepository {
  constructor(
    private prisma: PrismaClient,
    @Inject('BETTER_AUTH') private betterAuth: typeof auth,
  ) { }

  // BetterAuth methods

  async signUpEmail(email: string, password: string, name: string) {
    return this.betterAuth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });
  }

  async signInEmail(email: string, password: string) {
    return this.betterAuth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
  }

  async signOut() {
    return this.betterAuth.api.signOut({
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async changePassword() {
    return this.betterAuth.api.changePassword({
      body: {
        newPassword: '',
        currentPassword: '',
      },
    });
  }

  // Prisma methods

  async deactivateAccount(userId: string) {
    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        //active: false,
      },
    });
  }
}
