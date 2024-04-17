//import { Appbar } from "react-native-paper";
import { View, Pressable } from "react-native";
import Text from "./Text";
//import Constants from "expo-constants";

import styles from "./styles";

const MyAppBar = () => {
  return (
    <View style={styles.appBar}>
      <Pressable onPress={() => console.log("painettu AppBaria")}>
        <Text
          style={{ color: "white" }}
          fontWeight="bold"
          fontSize="subheading"
        >
          Repositores
        </Text>
      </Pressable>
    </View>
  );
};

export default MyAppBar;
