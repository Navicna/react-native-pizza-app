import { Platform } from "react-native";
import { screenProportion, spacingMarginXl } from "react-native-dev-ui";

export const getComponentWidth = () => screenProportion('FULL_WIDTH') - spacingMarginXl;
export const componentHeight = 56;

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';
    
