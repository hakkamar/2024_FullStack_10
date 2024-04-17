//import Constants from "expo-constants";
import { View } from "react-native";
import RepositoryList from "./RepositoryList";

//
//import FlexboxExample from "./FlexTesti";
//

//import styles from "./styles";
//import Text from "./Text";

import MyAppBar from "./MyAppBar";

const Main = () => {
  return (
    <View style={{ backgroundColor: "lightyellow" }}>
      <MyAppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
