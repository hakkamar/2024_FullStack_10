import { FlatList, View } from "react-native";
//import useRepositories from "../hooks/useRepositories";

import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphqL/queries";

import styles from "./styles";

import Item from "./RepositoryItem";

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  /*
  const { repositories } = useRepositories();

  console.log("repositories", repositories);

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  console.log("repositoryNodes", repositoryNodes);
  */

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    // Other options
  });

  //console.log("error", error);

  let repositoryNodes = [];
  if (!loading) {
    //console.log("data", data);
    const repositories = data.repositories;
    //console.log("repositories", repositories);
    repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];
  }

  //console.log("repositoryNodes", repositoryNodes);

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;
