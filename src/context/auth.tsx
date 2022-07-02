import React, { useEffect } from "react";

import { createContext, useContext, useState, ReactNode } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";
import NavigationService from "@navigation/NavigationService";
import {
  getStorageItem,
  removeStoageItem,
  setStorageItem,
  USER_CREDENTIALS_KEY,
} from "@utils/storage";

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
  isLogged: boolean;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User>();

  const isLogged = !!user;

  async function loadUserCredentials() {
    try {
      setIsLoading(true);
      const credentials = await getStorageItem(USER_CREDENTIALS_KEY);
      console.log({ credentials });

      if (credentials) {
        setUser(credentials);
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

          setStorageItem(USER_CREDENTIALS_KEY, userData);

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
      removeStoageItem(USER_CREDENTIALS_KEY);
      setUser(undefined);
      NavigationService.navigate("SignIn");
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
        isLogged,
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
