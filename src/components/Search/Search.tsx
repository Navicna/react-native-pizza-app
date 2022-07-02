import { Images } from "@constants/Images";
import React from "react";
import { Pressable, TextInput } from "react-native";
import { StyledView, Image, StyledText } from "react-native-dev-ui";

export function Search() {
  return (
    <StyledView flexDirection="row" justifyContent="center" mt={-24}>
      <StyledView
        as={TextInput}
        width={275}
        height={48}
        bgColor="white"
        borderColor="#F0F0F0"
        borderWidth={1}
        borderRadius={16}
        pl={10}
      />
      <Pressable style={{ position: "absolute", right: 110, top: 12 }}>
        <StyledText>X</StyledText>
      </Pressable>

      <StyledView
        height={49}
        width={49}
        bgColor="#528F33"
        justifyContent="center"
        alignItems="center"
        borderRadius={12}
        ml={8}
      >
        <Pressable>
          <Image source={Images.search} />
        </Pressable>
      </StyledView>
    </StyledView>
  );
}
