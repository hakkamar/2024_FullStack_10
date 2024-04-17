import { Pressable, View } from "react-native";

import styles from "./styles";
import Text from "./Text";

const Item = ({ item }) => (
  <Pressable key={item.id} onPress={() => console.log("Item press")}>
    <View style={styles.item}>
      <Text fontWeight="bold" fontSize="subheading">
        Full name: {item.fullName}
      </Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
    </View>
  </Pressable>
);

export default Item;
