import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphqL/queries";

const useRepositories = (orderBy, orderDirection, searchKeyword, first) => {
  let variables = {
    orderBy: orderBy,
    orderDirection: orderDirection,
    searchKeyword: searchKeyword,
    first: first,
  };

  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    variables: variables,
    fetchPolicy: "cache-and-network",
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositories;
