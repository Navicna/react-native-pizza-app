import { Images } from "@constants/Images";
import { useAuth } from "@context/auth";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ActivityIndicator, Pressable, ViewProps } from "react-native";
import { StatusBar } from "react-native";
import {
  Image,
  screenProportion,
  StyledText,
  StyledView,
  StyledViewProps,
} from "react-native-dev-ui";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ScreenBoxProps = {
  safeTop?: boolean;
  children: JSX.Element | JSX.Element[];
} & ViewProps &
  StyledViewProps;

export function ScreenBox({
  safeTop = true,
  children,
  ...rest
}: ScreenBoxProps) {
  const { top } = useSafeAreaInsets();
  const route = useRoute();

  const showHeader = !["SignIn"].includes(route.name);

  return (
    <StyledView overflow="hidden" flex={1} pt={safeTop ? top : 0} {...rest}>
      {showHeader && <Header />}
      {children}
    </StyledView>
  );
}

const Header = () => {
  const { user, signOut, isLogged, isLoading } = useAuth();

  console.warn({ isLogged });

  return (
    <StyledView
      as={LinearGradient}
      colors={["#E03F50", "#B83341"]}
      height={screenProportion("HEIGHT", 0.2)}
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      ph={24}
    >
      <StyledView flexDirection="row" alignItems="center">
        <Image source={Images.emoji} />
        <StyledText ml={16} color="white" fontSize={20}>
          Olá, {user?.name}
        </StyledText>
      </StyledView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Pressable onPress={signOut}>
          <Image source={Images.logout} />
        </Pressable>
      )}
    </StyledView>
  );
};
