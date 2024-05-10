import {
  StyleSheet,
  Platform,
  //StatusBar,
} from "react-native";
//import Constants from "expo-constants";

import theme from "../theme";

const styles = StyleSheet.create({
  // tästä
  topContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  avatarContainer: {
    flexGrow: 0,
    marginRight: 20,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: theme.roundness,
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  descriptionText: {
    flexGrow: 1,
  },
  languageContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  languageText: {
    color: "white",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.roundness,
    flexGrow: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  countItem: {
    flexGrow: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  countItemCount: {
    marginBottom: 5,
  },
  // tähän
  reviewContainer: {
    flexGrow: 0,
    marginRight: 5,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: theme.colors.fbBlue,
    borderWidth: 3,
    borderStyle: "solid",
    alignItems: "center",
  },
  reviewText: {
    flexGrow: 1,
    alignItems: "center",
    marginTop: 5,
    color: theme.colors.fbBlue,
  },
  ratingContainer: {
    flexGrow: 1,
    flexShrink: 1,
    marginRight: 20,
  },
  separator: {
    height: 10,
  },
  separator2: {
    height: 10,
    paddingTop: 250,
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
  containerWhite: {
    backgroundColor: "white",
    //backgroundColor: "red",
    flexGrow: 1,
    flexShrink: 1,
    padding: 5,
  },
  containerRepo: {
    //backgroundColor: "white",
    backgroundColor: "blue",
    flexGrow: 1,
    flexShrink: 1,
    padding: 5,
  },
  signInContainer: {
    backgroundColor: "white",
    padding: 15,
  },
  signInFieldContainer: {
    marginBottom: 15,
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
  errorText: {
    marginTop: 5,
    color: theme.colors.errorColor,
  },
  errorBorder: {
    borderColor: theme.colors.borderErrorColor,
  },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderStyle: "solid",
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    color: theme.colors.textPrimary,
    borderRadius: theme.roundness,
    borderColor: theme.borderColor,
  },
  buttonContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    minWidth: 64,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: theme.colors.primary,
    backgroundColor: theme.colors.fbBlue,
    borderRadius: theme.roundness,
  },
  text: {
    color: "white",
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
    width: 45,
    height: 45,
    borderRadius: theme.roundness,
  },
  logo: {
    width: 55,
    height: 55,
    borderRadius: theme.roundness,
  },
});

export default styles;
