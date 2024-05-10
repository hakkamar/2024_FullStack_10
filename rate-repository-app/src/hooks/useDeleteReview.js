import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphqL/mutations";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async (id) => {
    const payload = await mutate({ variables: { deleteReviewId: id } });
    return payload;
  };

  return [deleteReview, result];
};

export default useDeleteReview;
