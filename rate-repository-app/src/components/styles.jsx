import {
  StyleSheet,
  Platform,
  //StatusBar,
} from "react-native";
//import Constants from "expo-constants";

import theme from "../theme";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  appBar: {
    paddingTop: Platform.select({
      android: 24,
      ios: 24,
      default: 24,
    }),
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#24292e",
    marginTop: 20,
  },
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
  item: {
    flex: 1,
    display: "flex",
    gap: 5,
    flexDirection: "column",
    overflow: "auto",
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemB: {
    maxWidth: 50,
    flex: 1,
  },
  buttonLikeText: {
    color: "white",
    backgroundColor: theme.colors.fbBlue,
    marginTop: 10,
    padding: 10,
    textAlign: "center",
    width: 100,
    height: 40,
    borderRadius: theme.roundness,
  },
  button: {
    color: "white",
    paddingLeft: 10,
    backgroundColor: theme.colors.fbBlue,
    marginTop: 10,
    padding: 10,
    textAlign: "center",
    width: "auto",
    height: "auto",
    borderRadius: theme.roundness,
    fontSize: theme.fontSizes.subheading,
    borderWidth: 1,
    borderColor: "darkblue",
    alignItems: "center",
  },
  formText: {
    color: theme.colors.textPrimary,
    backgroundColor: theme.colors.fbBrightGray,
    paddingLeft: 10,
    marginTop: 10,
    padding: 10,
    width: "auto",
    height: "auto",
    borderRadius: theme.roundness,
    fontSize: theme.fontSizes.subheading,
    alignItems: "center",
  },

  formErrorText: {
    color: theme.colors.textPrimary,
    backgroundColor: theme.colors.errorColor,
    paddingLeft: 10,
    marginTop: 10,
    padding: 10,
    width: "auto",
    height: "auto",
    borderRadius: theme.roundness,
    fontSize: theme.fontSizes.subheading,
    alignItems: "center",
  },

  form: {
    flex: 1,
    display: "flex",
    gap: 5,
    flexDirection: "column",
    overflow: "auto",
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: "auto",
    height: "auto",
    borderRadius: theme.roundness,
    border: "solid",
  },

  table: {
    marginBottom: 5,
    marginTop: 5,
  },
  rowVasen: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cellVasen: {
    flex: 1,
    padding: 5,
    textAlign: "left",
  },
  cell: {
    flex: 1,
    padding: 5,
    textAlign: "center",
  },
  title: {
    backgroundColor: "yellow",
    marginTop: 10,
    padding: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: theme.roundness,
  },
  logo: {
    width: 66,
    height: 58,
    borderRadius: theme.roundness,
  },
});

export default styles;
