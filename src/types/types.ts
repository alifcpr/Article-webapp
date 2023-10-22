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
  userId: string;
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

export interface replyComments {
  check: boolean;
  createdAt: string;
  desc: string;
  id: string;
  parent: string;
  replyOnUser: string;
  updatedAt: string;
  user: {
    avatar: string;
    name: string;
    _id: string;
  };
  _v: boolean;
  _id: string;
}

export interface CommentType {
  check: boolean;
  createdAt: string;
  desc: string;
  id: string;
  parent: string | null;
  post: string;
  replies: replyComments[];
  replyOnUser: string | null;
  updatedAt: string;
  user: {
    avatar: string;
    name: string;
    _id: string;
  };
  _v: number;
  _id: string;
}

export interface BlogDetailType {
  body: any;
  caption: string;
  categories: string[];
  comments: CommentType[];
  createdAt: string;
  id: string;
  photo: string;
  slug: string;
  tags: string[];
  title: string;
  updatedAt: string;
  user: {
    avatar: string;
    name: string;
    _id: string;
  };
  _v: number;
  _id: string;
}
