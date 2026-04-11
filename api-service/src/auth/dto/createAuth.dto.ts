// =========== Imports ============
import vine from '@vinejs/vine';
import { ApiProperty } from '@nestjs/swagger';
import type { Infer } from '@vinejs/vine/types';

// =========== Schema ============
export const CreateAuthSchema = vine.object({
  email: vine.string().email().maxLength(50).toLowerCase().trim(),
  password: vine.string().minLength(8).maxLength(16).trim(),
  name: vine.string().minLength(3).maxLength(100).trim(),
});

// =========== Type ===========
export type CreateAuthDto = Infer<typeof CreateAuthSchema>;

// =========== DTO ============
export class CreateAuthBodyDto {
  @ApiProperty({ format: 'email', maxLength: 50 })
  email: string;

  @ApiProperty({ minLength: 8, maxLength: 16 })
  password: string;

  @ApiProperty({ maxLength: 100 })
  name: string;
}
