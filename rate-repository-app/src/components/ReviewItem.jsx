import { FlatList, View } from "react-native";

import { format } from "date-fns";

import styles from "./styles";
import Text from "./Text";

const RepositoryInfo = ({ repository }) => {
  // Repository's information implemented in the previous exercise
  <View style={styles.separator} />;
};

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.containerWhite}>
      <View style={styles.topContainer}>
        <View style={styles.avatarContainer}>
          <View style={styles.reviewContainer}>
            <Text
              style={styles.descriptionText}
              color="blue"
              fontWeight="extra"
            >
              {review.rating}
            </Text>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.descriptionText} fontWeight="bold">
            {review.user.username}
          </Text>
          <Text style={styles.descriptionText} color="textSecondary">
            {format(review.createdAt, "d.M.yyyy")}
          </Text>
          <Text style={styles.descriptionText}>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

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
