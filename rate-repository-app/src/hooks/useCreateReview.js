import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphqL/mutations";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    const review = { repositoryName, ownerName, rating, text };
    const payload = await mutate({ variables: { review } });
    //const { data } = payload;

    return payload;
  };

  return [createReview, result];
};

export default useCreateReview;
