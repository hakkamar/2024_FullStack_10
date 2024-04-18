import { Pressable, View, TextInput } from "react-native";
import { Form, useFormik } from "formik";

import Text from "./Text";
import styles from "./styles";

const initialValues = {
  userName: "",
  password: "",
};

const SignupForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.formText}
        id="userName"
        placeholder="userName"
        onChangeText={formik.handleChange("userName")}
        value={formik.values.userName}
      />
      <TextInput
        style={styles.formText}
        id="password"
        placeholder="password"
        secureTextEntry={true}
        onChangeText={formik.handleChange("password")}
        value={formik.values.password}
      />
      <Pressable key="submitLoginForm" onPress={formik.handleSubmit}>
        <Text style={styles.button}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return <SignupForm onSubmit={onSubmit} />;
};

export default SignIn;
