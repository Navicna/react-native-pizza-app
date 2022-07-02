import { ScreenBox } from "@components/ScreenBox/ScreenBox";
import { Search } from "@components/Search/Search";
import { grayOver } from "@constants/Colors";
import { Images } from "@constants/Images";
import { useAuth } from "@context/auth";
import { PizzaItem } from "@modules/menu/components/PizzaItem/PizzaItem";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable } from "react-native";
import {
  Image,
  screenProportion,
  StyledView,
  StyledText,
} from "react-native-dev-ui";

export default function MenuScreen() {
  return (
    <ScreenBox safeTop={false} bgColor="white">
      <Search />
      <StyledView
        flexDirection="row"
        justifyContent="space-between"
        mt={24}
        mh={24}
        pb={22}
        borderBottomWidth={1}
        borderColor={grayOver}
      >
        <StyledText fontSize={20}>Cardápio</StyledText>
        <StyledText>32 Pizzas</StyledText>
      </StyledView>
      <PizzaItem />
    </ScreenBox>
  );
}
