import { Pressable, View, TextInput } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";

import Text from "./Text";
import styles from "./styles";
import theme from "../theme";

const initialValues = {
  userName: "",
  password: "",
};

const validationSchema = yup.object().shape({
  userName: yup
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
        style={formik.errors.userName ? styles.formErrorText : styles.formText}
        id="userName"
        placeholder="userName"
        onChangeText={formik.handleChange("userName")}
        value={formik.values.userName}
      />
      {formik.touched.userName && formik.errors.userName && (
        <Text style={{ color: theme.colors.errorColor }}>
          {formik.errors.userName}
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
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return <SignupForm onSubmit={onSubmit} />;
};

export default SignIn;
