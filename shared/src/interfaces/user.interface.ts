import { IUser, IUserCreate, IUserUpdate, IUserLogin, IUserAuth, IUserProfile } from '../types';

export interface IUserService {
  findAll(): Promise<IUser[]>;
  findById(id: string): Promise<IUser>;
  findByEmail(email: string): Promise<IUser>;
  findByUsername(username: string): Promise<IUser>;
  create(createUserDto: IUserCreate): Promise<IUser>;
  update(id: string, updateUserDto: IUserUpdate): Promise<IUser>;
  delete(id: string): Promise<void>;
  changePassword(id: string, currentPassword: string, newPassword: string): Promise<void>;
}

export interface IAuthService {
  login(loginDto: IUserLogin): Promise<IUserAuth>;
  register(createUserDto: IUserCreate): Promise<IUserAuth>;
  validateToken(token: string): Promise<IUserProfile>;
  refreshToken(token: string): Promise<IUserAuth>;
  logout(token: string): Promise<void>;
  hashPassword(password: string): Promise<string>;
  comparePassword(password: string, hash: string): Promise<boolean>;
}

export interface IUserRepository {
  findAll(): Promise<IUser[]>;
  findById(id: string): Promise<IUser>;
  findByEmail(email: string): Promise<IUser>;
  findByUsername(username: string): Promise<IUser>;
  create(user: IUserCreate): Promise<IUser>;
  update(id: string, user: IUserUpdate): Promise<IUser>;
  delete(id: string): Promise<void>;
  updatePassword(id: string, hashedPassword: string): Promise<void>;
}

export interface IUserController {
  findAll(): Promise<IUser[]>;
  findById(id: string): Promise<IUser>;
  create(createUserDto: IUserCreate): Promise<IUser>;
  update(id: string, updateUserDto: IUserUpdate): Promise<IUser>;
  delete(id: string): Promise<void>;
  changePassword(id: string, changePasswordDto: any): Promise<void>;
}

export interface IAuthController {
  login(loginDto: IUserLogin): Promise<IUserAuth>;
  register(createUserDto: IUserCreate): Promise<IUserAuth>;
  refresh(token: string): Promise<IUserAuth>;
  logout(token: string): Promise<void>;
  profile(): Promise<IUserProfile>;
}
