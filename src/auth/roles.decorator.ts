import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../users/role.enum';

export const HasRoles = (...roles: UserRole[]) => SetMetadata('roles', roles);
