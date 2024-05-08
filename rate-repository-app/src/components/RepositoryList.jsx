import { useState } from "react";
import { FlatList, View } from "react-native";

import Pikkeri from "./Pikkeri";

import useRepositories from "../hooks/useRepositories";
import Item from "./RepositoryItem";

import styles from "./styles";

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      //ListHeaderComponent={}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [orderDirection, setOrderDirection] = useState("DESC");

  const { repositories } = useRepositories(orderBy, orderDirection);

  const setHakuEhdot = (itemValue) => {
    if (itemValue === "Latest") {
      setOrderBy("CREATED_AT");
      setOrderDirection("DESC");
    } else if (itemValue === "Highest") {
      setOrderBy("RATING_AVERAGE");
      setOrderDirection("DESC");
    } else {
      setOrderBy("RATING_AVERAGE");
      setOrderDirection("ASC");
    }
  };

  return (
    <>
      <Pikkeri setHakuEhdot={setHakuEhdot} />
      <RepositoryListContainer repositories={repositories} />
    </>
  );
};

export default RepositoryList;
