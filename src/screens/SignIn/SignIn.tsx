import { Images } from "@constants/Images";
import { StyledTextInput } from "../../components/StyledTextInput/StyledTextInput";

import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  StyledView,
  Image,
  StyledText,
  spacingMarginMd,
  spacingMarginXxs,
} from "react-native-dev-ui";
import { KeyboardAvoidingView } from "react-native";
import { ScreenBox } from "@components/ScreenBox/ScreenBox";
import { StyledButton } from "@components/StyledButton/StyledButton";
import { isIos } from "@constants/Metrics";
import { useAuth } from "@hooks/auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, isLoading } = useAuth();

  function handleSignIn() {
    signIn(email, password);
  }

  return (
    <KeyboardAvoidingView
      behavior={isIos ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScreenBox
        as={LinearGradient}
        alignItems="center"
        colors={["#E03F50", "#B83341"]}
      >
        <Image source={Images.signinBg} mt={spacingMarginMd} />
        <StyledView mt={10}>
          <StyledText fontSize={32} mb={24} color="white">
            Login
          </StyledText>
          <StyledTextInput
            placeholder="E-mail"
            mb={spacingMarginXxs}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <StyledTextInput
            placeholder="Senha"
            autoCapitalize="none"
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <StyledButton
            variant="text"
            align="end"
            mv={20}
            onPress={() => console.warn()}
          >
            Esqueci minha senha
          </StyledButton>
          <StyledButton isLoading={isLoading} onPress={handleSignIn}>
            Entrar
          </StyledButton>
        </StyledView>
      </ScreenBox>
    </KeyboardAvoidingView>
  );
}
