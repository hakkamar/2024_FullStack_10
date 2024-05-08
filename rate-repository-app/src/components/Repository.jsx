import { useMatch } from "react-router-native";

import { View } from "react-native";
import * as Linking from "expo-linking";

import SingleRepository from "./ReviewItem";

import useRepository from "../hooks/useRepository";

import Text from "./Text";

import Item from "./RepositoryItem";
import Button from "./Button";

import styles from "./styles";

const Repository = () => {
  const match = useMatch("/:id");

  const onPress = () => {
    Linking.openURL(repository.url);
  };

  const { repository, ...result } = useRepository(match.params.id);

  const repositoryReviews = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

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
