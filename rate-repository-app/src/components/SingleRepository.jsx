import { FlatList, View } from "react-native";

import ReviewItem from "./ReviewItem";

import styles from "./styles";

const RepositoryInfo = ({ repository }) => {
  // Repository's information implemented in the previous exercise
  <View style={styles.separator} />;
};

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = ({ repositoryReviews, onEndReach }) => {
  return (
    <FlatList
      data={repositoryReviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach()}
      onEndReachedThreshold={1}
    />
  );
};

export default SingleRepository;
