import { PropsWithChildren, createContext, useState } from "react";
import { UserEntity } from "../../domain/entities";

interface ContextProps {
  auth: UserEntity | undefined;
  handleLogin: (userData?: UserEntity) => void;
  handleLogout: () => void;
}

export const AuthContext = createContext<ContextProps>({
  auth: undefined,
  handleLogin: () => {},
  handleLogout: () => {},
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [auth, setAuth] = useState<UserEntity | undefined>(undefined);

  function handleLogin(userData?: UserEntity) {
    setAuth(userData);
  }

  function handleLogout() {
    setAuth(undefined);
  }

  const contextValue = {
    auth,
    handleLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
export default AuthContext;
