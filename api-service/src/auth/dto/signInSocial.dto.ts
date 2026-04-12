// =========== Imports ============
import vine from '@vinejs/vine';
import { ApiProperty } from '@nestjs/swagger';
import type { Infer } from '@vinejs/vine/types';

// =========== Schema ============
export const SignInSocialSchema = vine.object({
  callbackURL: vine.string().url().optional(),
});

// =========== Type ===========
export type SignInSocialDto = Infer<typeof SignInSocialSchema>;

// =========== DTO ============
export class SignInSocialBodyDto {
  @ApiProperty({ required: false })
  callbackURL?: string;
}
