import { UserRole } from '../types/user.types';
export declare class CreateUserDto {
    username: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    role?: UserRole;
}
export declare class UpdateUserDto {
    username?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    role?: UserRole;
}
export declare class LoginDto {
    email: string;
    password: string;
}
export declare class ChangePasswordDto {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}
//# sourceMappingURL=user.dto.d.ts.map