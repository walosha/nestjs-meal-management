import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { isPasswordMatch } from 'src/users/utils';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOnebyEmail(email);
    if (!user || !(await isPasswordMatch(password, user.password))) {
      throw new HttpException(
        'Email or password not found',
        HttpStatus.NOT_FOUND,
      );
    }
    delete user.password;
    return user;
  }

  async login(user: any) {
    const payload = {
      firstName: user.firstName,
      lastName: user.lastName,
      sub: user.id,
      roles: user.roles,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
