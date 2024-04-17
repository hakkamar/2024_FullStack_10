import { Pressable, Image, View } from "react-native";

import styles from "./styles";
import Text from "./Text";

function muotoile(luku) {
  const valivaihe = luku / 1000;
  const muotoiltu = Math.round(valivaihe * 10) / 10 + "k";
  return muotoiltu;
}

const Item = ({ item }) => {
  return (
    <Pressable key={item.id} onPress={() => console.log("Item press")}>
      <View style={styles.item}>
        <View style={styles.table}>
          <View style={styles.rowVasen}>
            <Image
              style={styles.logo}
              source={{
                uri: item.ownerAvatarUrl,
              }}
            />
            <View>
              <Text
                fontWeight="bold"
                fontSize="subheading"
                style={styles.cellVasen}
              >
                {item.fullName}
              </Text>
              <Text
                color="textSecondary"
                fontSize="subheading"
                style={styles.cellVasen}
              >
                {item.description}
              </Text>
              <Text style={styles.buttonLikeText}>{item.language}</Text>
            </View>
          </View>
        </View>

        <View style={styles.table}>
          <View style={styles.row}>
            <Text fontWeight="bold" fontSize="subheading" style={styles.cell}>
              {muotoile(item.stargazersCount)}
            </Text>
            <Text fontWeight="bold" fontSize="subheading" style={styles.cell}>
              {muotoile(item.forksCount)}
            </Text>
            <Text fontWeight="bold" fontSize="subheading" style={styles.cell}>
              {item.reviewCount}
            </Text>
            <Text fontWeight="bold" fontSize="subheading" style={styles.cell}>
              {item.ratingAverage}
            </Text>
          </View>
          <View style={styles.row}>
            <Text color="textSecondary" style={styles.cell}>
              Stars
            </Text>
            <Text color="textSecondary" style={styles.cell}>
              Forks
            </Text>
            <Text color="textSecondary" style={styles.cell}>
              Reviews
            </Text>
            <Text color="textSecondary" style={styles.cell}>
              Rating
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Item;
