import { Platform } from "react-native";

const theme = {
  roundness: 5,
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    mainBackground: "#e1e4e8",
    errorColor: "#d73a4a",
    fbBlue: "#1877F2",
    fbBlueYonder: "#4267B3",
    fbBrightGray: "#E9EBEE",
    fbSpanishGray: "#90949C",
    fbDimGray: "#616771",
    borderColor: "#aab2bb",
    borderErrorColor: "#d73a4a",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
