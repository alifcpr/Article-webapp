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

export interface Auth {
  login: boolean;
  token: string;
  admin: boolean;
}

export interface BlogsType {
  _id: string;
  title: string;
  caption: string;
  slug: string;
  body: {
    type: string;
    content: [
      {
        type: string;
        content: [{ type: string; text: string }];
      },
      {
        type: string;
        attrs: {
          src: string;
          alt: string;
          title: string;
        };
      }
    ];
  };
  photo: string;
  user: {
    _id: string;
    avatar: string;
    name: string;
    verified: boolean;
  };
  tags: string[];
  categories: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}
