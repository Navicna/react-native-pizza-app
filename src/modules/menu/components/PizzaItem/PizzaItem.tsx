import { grayOver } from "@constants/Colors";
import { Images } from "@constants/Images";
import React from "react";
import { Pressable } from "react-native";
import {
  Image,
  screenProportion,
  StyledView,
  StyledText,
} from "react-native-dev-ui";

export function PizzaItem() {
  return (
    <StyledView
      flexDirection="row"
      mh={16}
      width={screenProportion("FULL_WIDTH") - 32}
      pv={24}
    >
      <Image
        source={Images.pizzas["4queijos"]}
        resizeMode="contain"
        height={100}
        width={100}
      />
      <StyledView borderColor={grayOver} borderBottomWidth={1}>
        <StyledView flexDirection="row" justifyContent="space-between">
          <StyledText fontSize={20}>Margherita</StyledText>
          <StyledText>{">"}</StyledText>
        </StyledView>
        <StyledText style={{ flexShrink: 1 }}>
          Mussarela, manjericão fresco, parmesão e tomate.
        </StyledText>
      </StyledView>
    </StyledView>
  );
}
