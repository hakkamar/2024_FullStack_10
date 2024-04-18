import { ScrollView, View, Pressable } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";
//import Constants from "expo-constants";

import styles from "./styles";

//console.log("Constants.statusBarHeight", Constants.statusBarHeight);

const MyAppBar = () => {
  return (
    <View style={styles.appBar}>
      <ScrollView horizontal>
        <View style={styles.table}>
          <View style={styles.rowVasen}>
            <Pressable onPress={() => console.log("painettu AppBar - Repo")}>
              <Link to="/">
                <Text
                  style={{ color: "white" }}
                  fontWeight="bold"
                  fontSize="subheading"
                >
                  Repositores
                </Text>
              </Link>
            </Pressable>

            <Pressable onPress={() => console.log("painettu AppBar - SignIn")}>
              <Link to="/signin">
                <Text
                  style={{ color: "white" }}
                  fontWeight="bold"
                  fontSize="subheading"
                >
                  Sign in
                </Text>
              </Link>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyAppBar;
