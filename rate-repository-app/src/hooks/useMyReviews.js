import { useQuery } from "@apollo/client";
import { MY_REVIEWS } from "../graphqL/queries";

const useMyReviews = () => {
  let variables = {
    includeReviews: true,
  };

  const { data, ...result } = useQuery(MY_REVIEWS, {
    variables: variables,
    fetchPolicy: "cache-and-network",
  });

  return { reviews: data ? data.me.reviews : undefined, ...result };
};

export default useMyReviews;
