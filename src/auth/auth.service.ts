import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { isPasswordMatch } from 'src/users/utils';
import UserRepository from 'src/users/repository/KnexUserRepository';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private userRepository: UserRepository,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOnebyEmail(email);
    const lookedUp = await this.findAllPermissionsOfUser(user);
    console.log({ lookedUp });
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

  async findAllPermissionsOfUser(user): Promise<any[]> {
    return await this.userRepository.findAllPermissions(user);
  }
}
