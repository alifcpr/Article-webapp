import { createContext, useState } from "react";
import { Auth } from "../types/types";

type AuthProviderProps = {
  children?: React.ReactNode;
};

const initialContextState = {
  auth: { login: false, admin: false, token: "" },
  setAuth: (state: Auth) => {},
};

export const AuthInfo = createContext(initialContextState);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<Auth>(initialContextState.auth);
  return (
    <AuthInfo.Provider value={{ auth, setAuth }}>{children}</AuthInfo.Provider>
  );
};

export default AuthProvider;
