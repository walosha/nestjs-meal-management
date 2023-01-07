import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto';
import { HasRoles } from 'src/auth/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { UserRole } from './role.enum';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  users() {
    return this.usersService.findAll();
  }

  @HasRoles(UserRole.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Request() req: { body: UserDto }) {
    return this.usersService.create(req.body, UserRole.Admin);
  }
}
