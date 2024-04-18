import {
  StyleSheet,
  //StatusBar,
} from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  appBar: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,

    //padding: 10,
    //alignItems: "center",
    //backgroundColor: "black",
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
    //justifyContent: "space-between",
    resize: "both",
    overflow: "auto",
    backgroundColor: "white",
    //border: "solid",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    /*
    display: "flex",
    backgroundColor: "white",
    //backgroundColor: "lightgray",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexGrow: 0,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    */
  },
  itemB: {
    maxWidth: 50,
    flex: 1,
    //flexDirection: "row",
    /*
    title: {
    backgroundColor: "yellow",
    marginTop: 10,
    padding: 20,
  },,
    backgroundColor: "white",
    //backgroundColor: "lightgray",
    flexDirection: "column",
    //justifyContent: "space-between",
    alignItems: "flex-start",
    flexGrow: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    */
  },
  buttonLikeText: {
    color: "white",
    backgroundColor: "blue",
    marginTop: 10,
    padding: 10,
    textAlign: "center",
    width: 100,
    height: 40,
    borderRadius: 10,
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
    borderRadius: 10,
  },
  logo: {
    width: 66,
    height: 58,
    borderRadius: 10,
  },
});

export default styles;
