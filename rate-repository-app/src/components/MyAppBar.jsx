import { ScrollView, View, Pressable } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";
//import Constants from "expo-constants";

import { useNavigate } from "react-router-native";

import styles from "./styles";

//console.log("Constants.statusBarHeight", Constants.statusBarHeight);

import { useQuery } from "@apollo/client";
import { ME } from "../graphqL/queries";

import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

const MyAppBar = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const navigate = useNavigate();

  const { data, error, loading } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
    // Other options
  });

  let juuseri = undefined;
  if (loading) {
    return null;
  } else {
    if (data.me) {
      juuseri = data.me.username;
    }
  }

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate("/", { replace: true });
  };

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
            {juuseri ? (
              <Pressable
                onPress={() => console.log("painettu AppBar - create a review")}
              >
                <Link to="/createreview">
                  <Text
                    style={{ color: "white" }}
                    fontWeight="bold"
                    fontSize="subheading"
                  >
                    Create a review
                  </Text>
                </Link>
              </Pressable>
            ) : null}
            {juuseri ? (
              <Pressable onPress={() => signOut()}>
                <Text
                  style={{ color: "white" }}
                  fontWeight="bold"
                  fontSize="subheading"
                >
                  Sign out ( {juuseri} )
                </Text>
              </Pressable>
            ) : (
              <>
                <Pressable
                  onPress={() => console.log("painettu AppBar - SignIn")}
                >
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
                <Pressable
                  onPress={() => console.log("painettu AppBar - SignUp")}
                >
                  <Link to="/signup">
                    <Text
                      style={{ color: "white" }}
                      fontWeight="bold"
                      fontSize="subheading"
                    >
                      Sign up
                    </Text>
                  </Link>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyAppBar;
