import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(undefined);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
      {...props}
    />
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth };
