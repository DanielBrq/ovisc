import vine from '@vinejs/vine';
import { ApiProperty } from '@nestjs/swagger';
import type { Infer } from '@vinejs/vine/types';

export const DeactivateAccountSchema = vine.object({
  userId: vine.string().maxLength(191),
});

export type DeactivateAccountDto = Infer<typeof DeactivateAccountSchema>;

export class DeactivateAccountBodyDto {
  @ApiProperty({ maxLength: 191 })
  userId: string;
}
