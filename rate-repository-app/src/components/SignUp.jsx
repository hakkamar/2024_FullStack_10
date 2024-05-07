import { View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";

import Button from "./Button";
import FormikTextInput from "./FormikTextInput";

import useCreateUser from "../hooks/useCreateUser";
import useSignIn from "../hooks/useSignIn";

import styles from "./styles";

const initialValues = {
  username: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "username must be greater or equal to 5")
    .max(30, "username must be less or equal to 30")
    .required("username is required"),
  password: yup
    .string()
    .min(5, "password must be greater or equal to 5")
    .max(30, "password must be less or equal to 30")
    .required("password is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Password confirm is required"),
});

const SignUpForm = ({ onSubmit }) => {
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
      <View style={styles.signInFieldContainer}>
        <FormikTextInput
          name="passwordConfirm"
          placeholder="password confirm"
          secureTextEntry
        />
      </View>
      <Button testID="SingUpButton" onPress={onSubmit}>
        Sign Up
      </Button>
    </View>
  );
};

// testaukseen
export const SingUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignUp = () => {
  const [signIn] = useSignIn();
  const [signUp] = useCreateUser();

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password, passwordConfirm } = values;

    await signUp({ username, password });
    await signIn({ username, password });
    navigate("/", { replace: true });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp;
