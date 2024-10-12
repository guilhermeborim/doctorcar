export interface PostUser {
  name: string;
  email: string;
  password: string;
}

export interface GetUser {
  name: string;
  email: string;
  password: string;
  profile_picture: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}
export interface ChangePasswordUser {
  email: string;
  oldPassword: string;
  newPassword: string;
}
