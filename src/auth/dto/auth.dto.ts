import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthPayload {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
