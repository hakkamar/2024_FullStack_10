import { View } from "react-native";

import Text from "./Text";

import { format } from "date-fns";

import styles from "./styles";

let juuseri = "";

const ReviewItem = ({ review }) => {
  if (review?.user) {
    juuseri = review.user.username;
  } else {
    juuseri = review.repository.fullName;
  }

  return (
    <View style={styles.containerWhite}>
      <View style={styles.topContainer}>
        <View>
          <View style={styles.reviewContainer}>
            <Text style={styles.reviewText} fontWeight="extra">
              {review.rating}
            </Text>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.descriptionText} fontWeight="bold">
            {juuseri}
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

export default ReviewItem;
