// =========== Imports ============
import { Injectable, ConflictException } from '@nestjs/common';
import { AuthRepository } from './auth.repository';

// =========== Service ============
@Injectable()
export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  // CREATE
  async signUpEmail(email: string, password: string, name: string) {
    const existEmail = await this.authRepository.existEmail(email);
    if (existEmail)
      throw new ConflictException('El correo electrónico ya existe');
    return this.authRepository.signUpEmail(email, password, name);
  }

  // READ
  async signInEmail(email: string, password: string) {
    return this.authRepository.signInEmail(email, password);
  }

  async signInGoogle(callbackURL?: string) {
    return this.authRepository.signInSocial('google', callbackURL);
  }

  async signOut(req: { headers: Headers }) {
    return this.authRepository.signOut(req);
  }

  async changePassword() {
    return this.authRepository.changePassword();
  }

  // UPDATE
  // Async...

  // DELETE
  // Async...
}
