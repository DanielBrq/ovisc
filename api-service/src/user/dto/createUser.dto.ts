import vine from '@vinejs/vine';
import type { Infer } from '@vinejs/vine/types';

export const CreateUserSchema = vine.object({
  email: vine.string().email(),
  password: vine.string().minLength(8),
  name: vine.string(),
});

export type CreateUserDto = Infer<typeof CreateUserSchema>;
