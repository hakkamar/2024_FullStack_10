import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphqL/queries";

const useRepositories = (orderBy, orderDirection) => {
  let variables = {
    orderBy: orderBy,
    orderDirection: orderDirection,
  };

  const { data, ...result } = useQuery(GET_REPOSITORIES, {
    variables: variables,
    fetchPolicy: "cache-and-network",
  });

  return { repositories: data ? data.repositories : undefined, ...result };
};

export default useRepositories;

/*
import { useState, useEffect } from "react";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);

    // Replace the IP address part with your own IP address!
    //exp://192.168.0.7:8081
    const response = await fetch("http://192.168.0.7:5000/api/repositories");
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
*/
