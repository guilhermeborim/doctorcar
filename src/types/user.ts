export interface PostUser {
  name: string;
  email: string;
  password: string;
}

export interface GetUser {
  name: string;
  email: string;
  password: string;
  profilePicture: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface ChangePasswordUser {
  email: string;
  oldPassword: string;
  newPassword: string;
}
