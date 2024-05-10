//import Constants from "expo-constants";
import { View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import MyAppBar from "./MyAppBar";
import RepositoryList from "./RepositoryList";
import Repository from "./Repository";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ReviewFormi from "./ReviewFormi";
import MyReviews from "./MyReviews";

import styles from "./styles";
//import Text from "./Text";

const Main = () => {
  return (
    <View style={styles.container}>
      <MyAppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createreview" element={<ReviewFormi />} />
        <Route path="/myreviews" element={<MyReviews />} />
        <Route path="/:id" element={<Repository />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
