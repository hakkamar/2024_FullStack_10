import { useQuery } from "@apollo/client";
import { GET_REPOSITORY_BY_ID } from "../graphqL/queries";

const useRepository = (id) => {
  //console.log("id", id);
  const { data, ...result } = useQuery(GET_REPOSITORY_BY_ID, {
    variables: { id: id },
    fetchPolicy: "cache-and-network",
  });

  return { repository: data ? data.repository : undefined, ...result };
};

export default useRepository;
