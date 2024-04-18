//import Constants from "expo-constants";
import { View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import MyAppBar from "./MyAppBar";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";

import styles from "./styles";
//import Text from "./Text";

const Main = () => {
  return (
    <View style={styles.container}>
      <MyAppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
