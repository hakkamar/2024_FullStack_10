import { View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";

import Button from "./Button";
import FormikTextInput from "./FormikTextInput";
import FormikNumberInput from "./FormikNumberInput";

import useCreateReview from "../hooks/useCreateReview";

import styles from "./styles";

const initialValues = {
  ownerName: "",
  repositoryName: "",
  ratingS: 50,
  text: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup
    .string()
    .min(3, "Repository name must be greater or equal to 3")
    .required("Repository name is required"),
  ratingS: yup
    .number()
    .min(0, "Rating must be between 0-100")
    .max(100, "Rating must be between 1-100")
    .required("Rating is required"),
  text: yup.string().max(2000, "Review max 2000"),
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.signInContainer}>
      <View style={styles.signInFieldContainer}>
        <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      </View>
      <View style={styles.signInFieldContainer}>
        <FormikTextInput name="repositoryName" placeholder="Repository name" />
      </View>
      <View style={styles.signInFieldContainer}>
        <FormikNumberInput name="ratingS" placeholder="Rating between 0-100" />
      </View>
      <View style={styles.signInFieldContainer}>
        <FormikTextInput name="text" placeholder="Review" multiline={true} />
      </View>
      <Button testID="CreateReviewButton" onPress={onSubmit}>
        Create a review
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
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const ReviewFormi = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, ratingS, text } = values;
    const rating = Number(ratingS);

    const paluu = await createReview({
      ownerName,
      repositoryName,
      rating,
      text,
    });

    const polku = "/" + `${paluu.data.createReview.repositoryId}`;
    navigate(polku, { replace: true });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default ReviewFormi;
