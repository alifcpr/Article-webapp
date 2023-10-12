export interface SignUp {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface getError {
  response: { data: { message: string } };
}

export interface User {
  _id: string;
  avatar: string;
  name: string;
  email: string;
  verified: boolean;
  admin: boolean;
  token: string;
}
