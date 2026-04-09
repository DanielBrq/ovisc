import vine from '@vinejs/vine';
import { ApiProperty } from '@nestjs/swagger';
import type { Infer } from '@vinejs/vine/types';

export const SignInEmailSchema = vine.object({
  email: vine.string().email().maxLength(50).toLowerCase().trim(),
  password: vine.string().minLength(8).maxLength(16).trim(),
});

export type SignInEmailDto = Infer<typeof SignInEmailSchema>;

export class SignInEmailBodyDto {
  @ApiProperty({ format: 'email', maxLength: 50 })
  email: string;

  @ApiProperty({ minLength: 8, maxLength: 16 })
  password: string;
}
