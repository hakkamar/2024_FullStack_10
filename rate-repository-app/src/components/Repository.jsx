import { useMatch } from "react-router-native";

import { View } from "react-native";
import * as Linking from "expo-linking";

import SingleRepository from "./SingleRepository";

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
    <View>
      <View style={styles.contentContainer}>
        <Item item={repository} />
        {repository.url ? (
          <View style={styles.containerWhite}>
            <Button onPress={onPress}>Open in GitHub</Button>
          </View>
        ) : (
          <Text>...</Text>
        )}
      </View>
      <View style={styles.separator}></View>
      <View>
        {repositoryReviews ? (
          <View style={styles.contentContainer}>
            <SingleRepository repositoryReviews={repositoryReviews} />
          </View>
        ) : (
          <Text>---</Text>
        )}
      </View>
    </View>
  );
};

export default Repository;
