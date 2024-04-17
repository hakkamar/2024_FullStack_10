import {
  StyleSheet,
  //StatusBar,
} from "react-native";

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
    padding: 10,
    alignItems: "center",
    backgroundColor: "gray",
    flexGrow: 1,
    flexShrink: 1,
    //flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
    marginTop: 10,
  },
  item: {
    //backgroundColor: "#f9c2ff",
    backgroundColor: "lightgray",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    backgroundColor: "yellow",
    marginTop: 10,
    padding: 20,
  },
});

export default styles;
