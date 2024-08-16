import { User } from '#users/schemas/user.schema';
import { PickType } from '@nestjs/swagger';

export class CreateUserDto extends PickType(User, [
  'email',
  'password',
  'avatar',
  'name',
  'role',
]) {}
