export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

export interface IUser {
  _id?: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserCreate {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  role?: UserRole;
}

export interface IUserUpdate {
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: UserRole;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserAuth {
  user: IUser;
  token: string;
  expiresIn: string;
}

export interface IUserProfile {
  _id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: UserRole;
}
