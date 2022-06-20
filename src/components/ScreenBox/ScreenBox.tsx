import React from "react";
import { ViewProps } from "react-native";
import { StatusBar } from "react-native";
import { StyledView } from "react-native-dev-ui";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenBoxProps extends ViewProps {
  safeTop?: boolean;
  children: JSX.Element | JSX.Element[];
}

export function ScreenBox({
  safeTop = true,
  children,
  ...rest
}: ScreenBoxProps) {
  const { top } = useSafeAreaInsets();

  return (
    <StyledView overflow="hidden" flex={1} pt={safeTop ? top : 0} {...rest}>
      {children}
    </StyledView>
  );
}
