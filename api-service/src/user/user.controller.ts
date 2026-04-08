import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import type { CreateUserDto } from './dto/createUser.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('sign-up-email')
  async signUpEmail(@Body() createUserDto: CreateUserDto) {
    return this.userService.signUpEmail(
      createUserDto.email,
      createUserDto.password,
      createUserDto.name,
    );
  }

  @Post('sign-in-email')
  async signInEmail(@Body() body: { email: string; password: string }) {
    return this.userService.signInEmail(body.email, body.password);
  }

  @Post('sign-out')
  async signOut() {
    return this.userService.signOut();
  }

  @Post('change-password')
  async changePassword() {
    return this.userService.changePassword();
  }

  @Post('deactivate-account')
  async deactivateAccount(@Body() body: { userId: string }) {
    return this.userService.deactivateAccount(body.userId);
  }
}
