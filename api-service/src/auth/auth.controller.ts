// =========== Imports ============
import {
  Controller,
  Post,
  Body,
  HttpCode,
  UsePipes,
  Req,
} from '@nestjs/common';
import {
  ApiBody,
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { VineValidationPipe } from '../common/pipes/vine-validation.pipe';
import { AllowAnonymous } from '@thallesp/nestjs-better-auth';
import {
  CreateAuthSchema,
  SignInEmailSchema,
  CreateAuthBodyDto,
  SignInEmailBodyDto,
  SignInSocialSchema,
  SignInSocialBodyDto,
  type CreateAuthDto,
  type SignInEmailDto,
  type SignInSocialDto,
} from './dto';

// =========== Controller ============
@ApiTags('Auth')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Sign Up ==========================================
  @Post('sign-up-email')
  @HttpCode(201)
  @ApiBody({ type: CreateAuthBodyDto })
  @UsePipes(new VineValidationPipe(CreateAuthSchema))
  @AllowAnonymous()
  async signUpEmail(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signUpEmail(
      createAuthDto.email,
      createAuthDto.password,
      createAuthDto.name,
    );
  }

  // Sign in / Sign up with Google ====================
  @Post('google')
  @HttpCode(200)
  @ApiBody({ type: SignInSocialBodyDto })
  @ApiOperation({ summary: 'Obtener URL de redirección para Google OAuth' })
  @ApiResponse({
    status: 200,
    description:
      'Devuelve el objeto con la URL de redirección para completar el login en Google',
  })
  @UsePipes(new VineValidationPipe(SignInSocialSchema))
  @AllowAnonymous()
  async signInGoogle(@Body() body: SignInSocialDto) {
    return this.authService.signInGoogle(body.callbackURL);
  }

  // Sign In ==========================================
  @Post('sign-in-email')
  @HttpCode(200)
  @ApiBody({ type: SignInEmailBodyDto })
  @UsePipes(new VineValidationPipe(SignInEmailSchema))
  @AllowAnonymous()
  async signInEmail(@Body() body: SignInEmailDto) {
    return this.authService.signInEmail(body.email, body.password);
  }

  // Sign Out ==========================================
  @Post('sign-out')
  @HttpCode(200)
  async signOut(@Req() req: { headers: Headers }) {
    return this.authService.signOut(req);
  }
}
