import { View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";

import Button from "./Button";
import FormikTextInput from "./FormikTextInput";
import useSignIn from "../hooks/useSignIn";

import styles from "./styles";

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

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.signInContainer}>
      <View style={styles.signInFieldContainer}>
        <FormikTextInput name="username" placeholder="username" />
      </View>
      <View style={styles.signInFieldContainer}>
        <FormikTextInput
          name="password"
          placeholder="password"
          secureTextEntry
        />
      </View>
      <Button testID="SingInButton" onPress={onSubmit}>
        Sign in
      </Button>
    </View>
  );
};

// testaukseen
export const SingInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    await signIn({ username, password });

    navigate("/", { replace: true });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
