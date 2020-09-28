import React, { useState, createContext } from "react";

export const AuthUser = createContext();

const AuthUserContextProvider = ({ children }) => {
  const [usernameContext, setUsername] = useState(""),
    [passwordContext, setPassword] = useState("");

  return (
    <AuthUser.Provider
      value={{
        usernameContext,
        setUsername,
        passwordContext,
        setPassword,
      }}
    >
      {children}
    </AuthUser.Provider>
  );
};

export default AuthUserContextProvider;
