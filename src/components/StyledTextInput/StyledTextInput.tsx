import { TextInput, TextInputProps } from "react-native";
import React from "react";
import { screenProportion, StyledView } from "react-native-dev-ui";

export function StyledTextInput({
  placeholder,
  ...rest
}: { placeholder: string } & TextInputProps) {
  return (
    <StyledView {...rest}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="white"
        style={{
          borderWidth: 1,
          borderColor: "#D16470",
          width: screenProportion("FULL_WIDTH") - 64,
          height: 56,
          borderRadius: 12,
          paddingLeft: 20,
          color: "white",
        }}
      />
    </StyledView>
  );
}
