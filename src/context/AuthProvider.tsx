import { createContext, useState } from "react";

type AppContextStateType = {
  login: boolean;
  admin: boolean;
  token: string;
};

type AuthProviderProps = {
  children?: React.ReactNode;
};

const initialContextState = {
  auth: { login: false, admin: false, token: "" },
  setAuth: (state: AppContextStateType) => {},
};

export const AuthInfo = createContext(initialContextState);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<AppContextStateType>(
    initialContextState.auth
  );
  return (
    <AuthInfo.Provider value={{ auth, setAuth }}>{children}</AuthInfo.Provider>
  );
};

export default AuthProvider;
