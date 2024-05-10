import { FlatList, View } from "react-native";

import useMyReviews from "../hooks/useMyReviews";

import ReviewItem from "./ReviewItem";

import Text from "./Text";

import styles from "./styles";

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
  const { reviews } = useMyReviews();
  const myReviews = reviews ? reviews.edges.map((edge) => edge.node) : [];

  if (myReviews.length === 0) {
    return <Text>You have no reviews yet</Text>;
  }

  return (
    <FlatList
      data={myReviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;
