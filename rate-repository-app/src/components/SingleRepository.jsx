import { FlatList, View } from "react-native";

import ReviewItem from "./ReviewItem";

import styles from "./styles";

const RepositoryInfo = ({ repository }) => {
  // Repository's information implemented in the previous exercise
  <View style={styles.separator} />;
};

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = (repositoryReviews) => {
  //console.log("repositoryReviews", repositoryReviews);
  //console.log("repositoryReviews.repositoryReviews",repositoryReviews.repositoryReviews);

  return (
    <FlatList
      data={repositoryReviews.repositoryReviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      //ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      //ListHeaderComponent={() => (<RepositoryInfo repository={repositoryReviews.repositoryReviews} />)}
      // ...
    />
  );
};

export default SingleRepository;
