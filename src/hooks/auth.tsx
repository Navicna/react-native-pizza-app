import React, { useEffect } from "react";

import { createContext, useContext, useState, ReactNode } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  id: string;
  name: string;
  isAdm: boolean;
};

type AuthContextData = {
  signIn(email: string, password: string): void;
  signOut(): void;
  isLoading: boolean;
  user?: User;
  loadUserCredentials(): void;
  forgotPassword(email: string): void;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User>();

  async function loadUserCredentials() {
    try {
      setIsLoading(true);
      const credentials = await AsyncStorage.getItem("@UserCredentials");

      if (credentials) {
        const userData = JSON.parse(credentials);
        setUser(userData);
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function signIn(email: string, password: string) {
    try {
      if (!email || !password) return;
      setIsLoading(true);
      const credentials = await auth().signInWithEmailAndPassword(
        email,
        password
      );
      firestore()
        .collection("users")
        .doc(credentials.user.uid)
        .get()
        .then((profile) => {
          const { name, isAdm } = profile.data() as User;

          if (!profile.exists) return;
          const userData = {
            id: credentials.user.uid,
            name,
            isAdm,
          };

          AsyncStorage.setItem("@UserCredentials", JSON.stringify(userData));

          setUser(userData);
          console.log({ userData });
        });
    } catch (e) {
      Alert.alert("Ops", e.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function signOut() {
    try {
      setIsLoading(true);
      await auth().signOut();
      await AsyncStorage.removeItem("@UserCredentials");
      setUser(undefined);
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  }

  async function forgotPassword(email: string) {
    try {
      if (!email) return;
      setIsLoading(true);
      await auth().sendPasswordResetEmail(email);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadUserCredentials();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        isLoading,
        user,
        loadUserCredentials,
        signOut,
        forgotPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { useAuth, AuthProvider };
