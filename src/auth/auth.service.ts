import { HttpException, Injectable } from '@nestjs/common';
import { AuthPayload } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async validateUser({ username, password }: AuthPayload) {
    const user: any = await this.userService.getDocument({ email: username }, {});

    if (!user) throw new HttpException('Invalid Credentials', 401);

    const matchPassword = compareSync(password, user.password);

    if (matchPassword) {
      return this.jwtService.signAsync({ id: user._id, name: user.firstName });
    } else {
      return { error: true, message: 'Password does not match' };
    }
  }
}
