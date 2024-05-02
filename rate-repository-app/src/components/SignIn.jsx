import { Pressable, View, TextInput } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";

import Text from "./Text";
import styles from "./styles";
import theme from "../theme";

import useSignIn from "../hooks/useSignIn";

import { useNavigate } from "react-router-native";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "userName must be greater or equal to 3")
    .required("userName is required"),
  password: yup
    .string()
    .min(3, "password must be greater or equal to 3")
    .required("password is required"),
});

const SignupForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.form}>
      <TextInput
        style={formik.errors.username ? styles.formErrorText : styles.formText}
        id="username"
        placeholder="username"
        onChangeText={formik.handleChange("username")}
        value={formik.values.username}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: theme.colors.errorColor }}>
          {formik.errors.username}
        </Text>
      )}
      <TextInput
        style={formik.errors.password ? styles.formErrorText : styles.formText}
        id="password"
        placeholder="password"
        secureTextEntry={true}
        onChangeText={formik.handleChange("password")}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: theme.colors.errorColor }}>
          {formik.errors.password}
        </Text>
      )}
      <Pressable key="submitLoginForm" onPress={formik.handleSubmit}>
        <Text style={styles.button}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    //alert(JSON.stringify(values, null, 2));
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });

      navigate("/");
    } catch (e) {
      console.log("ERROR SignIn", e);
    }
  };

  return <SignupForm onSubmit={onSubmit} />;
};

export default SignIn;
