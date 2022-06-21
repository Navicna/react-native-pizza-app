import React from "react";

import { createContext, useContext, useState, ReactNode } from "react";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextData = {};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { useAuth, AuthProvider };
