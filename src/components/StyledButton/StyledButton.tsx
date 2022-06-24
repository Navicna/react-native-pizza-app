import { getComponentWidth, componentHeight } from "@constants/Metrics";
import React from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import {
  spacingPaddingXs,
  StyledText,
  StyledView,
  StyledViewProps,
} from "react-native-dev-ui";

type StyledButtonProps = {
  align?: "center" | "start" | "end";
  variant?: "text" | "default";
  bgColor?: string;
  fontColor?: string;
  children: string;
  isLoading?: boolean;
} & TouchableOpacityProps &
  StyledViewProps;

const alignHelper = {
  center: "center",
  start: "flex-start",
  end: "flex-end",
};

export function StyledButton({
  align = "center",
  variant = "default",
  bgColor = "#E03F50",
  fontColor = "white",
  children,
  isLoading,
  ...rest
}: StyledButtonProps) {
  return (
    <StyledView
      as={TouchableOpacity}
      width={getComponentWidth}
      height={componentHeight}
      bgColor={variant === "text" ? "transparent" : bgColor}
      justifyContent="center"
      alignItems={alignHelper[align]}
      borderRadius={12}
      p={16}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={fontColor} />
      ) : (
        <StyledText color={fontColor}>{children}</StyledText>
      )}
    </StyledView>
  );
}
