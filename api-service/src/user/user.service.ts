import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async signUpEmail(email: string, password: string, name: string) {
    return this.userRepository.signUpEmail(email, password, name);
  }

  async signInEmail(email: string, password: string) {
    return this.userRepository.signInEmail(email, password);
  }

  async signOut() {
    return this.userRepository.signOut();
  }

  async changePassword() {
    return this.userRepository.changePassword();
  }

  async deactivateAccount(userId: string) {
    return this.userRepository.deactivateAccount(userId);
  }
}
