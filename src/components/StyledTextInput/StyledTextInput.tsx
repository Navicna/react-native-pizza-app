import { TextInput, TextInputProps } from "react-native";
import React from "react";
import {
  screenProportion,
  StyledView,
  StyledTextProps,
} from "react-native-dev-ui";

export function StyledTextInput({
  placeholder,
  ...rest
}: { placeholder: string } & TextInputProps & StyledTextProps) {
  return (
    <StyledView
      as={TextInput}
      placeholder={placeholder}
      placeholderTextColor="white"
      borderWidth={1}
      borderColor="#D16470"
      width={screenProportion("FULL_WIDTH") - 64}
      height={56}
      borderRadius={12}
      pl={20}
      color="white"
      {...rest}
    />
  );
}
