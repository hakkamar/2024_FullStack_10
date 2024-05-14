import { useQuery } from "@apollo/client";
import { GET_REVIEWS_BY_ID } from "../graphqL/queries";

const useReviews = (id, first) => {
  let variables = { id: id, first: first };

  const { data, loading, fetchMore, ...result } = useQuery(GET_REVIEWS_BY_ID, {
    variables: variables,
    fetchPolicy: "cache-and-network",
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data?.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useReviews;
