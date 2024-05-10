import { Platform, FlatList, View, Alert } from "react-native";

import useMyReviews from "../hooks/useMyReviews";

import { useNavigate } from "react-router-native";
import useDeleteReview from "../hooks/useDeleteReview";

import ReviewItem from "./ReviewItem";

import Text from "./Text";
import Button from "./Button";

import styles from "./styles";

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();

  const { reviews, refetch } = useMyReviews();
  const myReviews = reviews ? reviews.edges.map((edge) => edge.node) : [];

  if (myReviews.length === 0) {
    return <Text>You have no reviews yet</Text>;
  }

  const munArvostelut = (item) => {
    const onPressView = () => {
      const polku = "/" + `${item.repository.id}`;
      navigate(polku, { replace: true });
    };

    const poistaArvostelu = async () => {
      await deleteReview(item.id);
      refetch();
    };

    const onPressDelete = () => {
      if (Platform.OS === "android") {
        //console.log("android");
        Alert.alert(
          "Delete review",
          "Are You sure You want to delete this review?",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => {
                poistaArvostelu();
              },
            },
          ]
        );
      } else {
        //console.log("ei android");
        const poistetaan = window.confirm(
          "Are You sure You want to delete this review?"
        );

        if (poistetaan) {
          poistaArvostelu();
        }
      }
    };

    return (
      <View style={styles.containerWhite}>
        <ReviewItem review={item} />

        <View style={styles.topContainer}>
          <View style={styles.rowVasen}>
            <Button onPress={onPressView}>View repository</Button>
            <Button onPress={onPressDelete} style={styles.buttonDelete}>
              Delete review
            </Button>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={myReviews}
      renderItem={({ item }) => munArvostelut(item)}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;
