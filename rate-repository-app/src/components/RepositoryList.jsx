import React from "react";
import { useState } from "react";
import { FlatList, View } from "react-native";
import { useDebounce } from "use-debounce";

import Pikkeri from "./Pikkeri";
import Searcheri from "./Searcheri";
import Item from "./RepositoryItem";

import useRepositories from "../hooks/useRepositories";

import styles from "./styles";

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { setValue, value, setHakuEhdot } = this.props;

    return (
      <>
        <Searcheri setValue={setValue} value={value} />
        <Pikkeri setHakuEhdot={setHakuEhdot} />
      </>
    );
  };

  render() {
    const { repositories } = this.props;
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={this.renderHeader}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [orderDirection, setOrderDirection] = useState("DESC");

  const [value, setValue] = useState("");
  const [searchKeyword] = useDebounce(value, 500);

  const { repositories } = useRepositories(
    orderBy,
    orderDirection,
    searchKeyword
  );

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
    <RepositoryListContainer
      repositories={repositories}
      setValue={setValue}
      value={value}
      setHakuEhdot={setHakuEhdot}
    />
  );
};

export default RepositoryList;
