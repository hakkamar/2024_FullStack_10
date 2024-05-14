import { useMatch } from "react-router-native";

import { View } from "react-native";
import * as Linking from "expo-linking";

import SingleRepository from "./SingleRepository";

//import useRepository from "../hooks/useRepository";
import useReviews from "../hooks/useReviews";

import Text from "./Text";

import Item from "./RepositoryItem";
import Button from "./Button";

import styles from "./styles";

const Repository = () => {
  const match = useMatch("/:id");

  const onPress = () => {
    Linking.openURL(repository.url);
  };

  const first = 10;
  const { repository, loading, fetchMore } = useReviews(match.params.id, first);

  const onEndReach = () => {
    fetchMore();
  };

  const repositoryReviews = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  if (loading) {
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
        ) : null}
      </View>
      <View style={styles.separator}></View>
      <View>
        {repositoryReviews ? (
          <View style={styles.contentContainer}>
            <SingleRepository
              repositoryReviews={repositoryReviews}
              onEndReach={onEndReach}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Repository;
