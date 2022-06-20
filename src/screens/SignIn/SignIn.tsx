import { Images } from "@constants/Images";
import { StyledTextInput } from "../../components/StyledTextInput/StyledTextInput";

import { LinearGradient } from "expo-linear-gradient";
import React from "react";
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

export default function SignIn() {
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
          <StyledTextInput placeholder="E-mail" mb={spacingMarginXxs} />
          <StyledTextInput placeholder="Senha" />
          <StyledButton variant="text" align="end" mv={20}>
            Esqueci minha senha
          </StyledButton>
          <StyledButton>Entrar</StyledButton>
        </StyledView>
      </ScreenBox>
    </KeyboardAvoidingView>
  );
}
