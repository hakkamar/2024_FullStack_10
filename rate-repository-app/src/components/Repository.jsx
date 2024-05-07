import { useMatch } from "react-router-native";

import { View } from "react-native";
import * as Linking from "expo-linking";

import SingleRepository from "./ReviewItem";

import Text from "./Text";

import Item from "./RepositoryItem";
import Button from "./Button";

import styles from "./styles";

import { useQuery } from "@apollo/client";
import { GET_REPOSITORY_BY_ID } from "../graphqL/queries";

//
//
//
// Tän voi siirtää omaan...
//
//
const useRepository = (id) => {
  //console.log("id", id);
  const { data, ...result } = useQuery(GET_REPOSITORY_BY_ID, {
    variables: { id: id },
    fetchPolicy: "cache-and-network",
  });

  return { repository: data ? data.repository : undefined, ...result };
};

const Repository = () => {
  const match = useMatch("/:id");
  //console.log("match", match.params.id);

  const onPress = () => {
    Linking.openURL(repository.url);
  };

  const { repository, ...result } = useRepository(match.params.id);

  const repositoryReviews = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  //console.log("repositoryReviews eka", repositoryReviews);

  if (result?.loading) {
    return <Text>loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Item item={repository} />
      </View>
      {repository.url && (
        <View style={styles.contentContainer}>
          <Button onPress={onPress}>Open in GitHub</Button>
          <View style={styles.separator} />
        </View>
      )}
      {repositoryReviews && (
        <View style={styles.contentContainer}>
          <SingleRepository repositoryReviews={repositoryReviews} />
        </View>
      )}
    </View>
  );
};

export default Repository;
