import { useNavigate } from "react-router-native";
import { Pressable, Image, View } from "react-native";

import styles from "./styles";
import Text from "./Text";

function muotoile(luku) {
  if (luku < 1000) {
    return luku.toLocaleString();
  }

  const valivaihe = luku / 1000;
  const muotoiltu = Math.round(valivaihe * 10) / 10 + "k";
  return muotoiltu;
}

const CountItem = ({ label, count }) => {
  return (
    <View style={styles.countItem}>
      <Text style={styles.countItemCount} fontWeight="bold">
        {muotoile(count)}
      </Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

const Item = ({ item }) => {
  const navigate = useNavigate();

  const onPress = () => {
    //window.alert("onPress painettu");
    //console.log("item.id", item.id);
    //navigate("/`${item.id}`", { replace: true });
    const polku = "/" + `${item.id}`;
    navigate(polku, { replace: true });
  };

  return (
    <Pressable key={item.id} onPress={onPress}>
      <View style={styles.containerWhite}>
        <View style={styles.topContainer}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: item.ownerAvatarUrl }}
              style={styles.avatar}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text
              style={styles.nameText}
              fontWeight="bold"
              fontSize="subheading"
              numberOfLines={1}
            >
              {item.fullName}
            </Text>
            <Text style={styles.descriptionText} color="textSecondary">
              {item.description}
            </Text>
            {item.language ? (
              <View style={styles.languageContainer}>
                <Text style={styles.languageText}>{item.language}</Text>
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <CountItem count={item.stargazersCount} label="Stars" />
          <CountItem count={item.forksCount} label="Forks" />
          <CountItem count={item.reviewCount} label="Reviews" />
          <CountItem count={item.ratingAverage} label="Rating" />
        </View>
      </View>
    </Pressable>
  );

  /*
  return (
    <Pressable key={item.id} onPress={onPress}>
      <View testID="repositoryItem" style={styles.item}>
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
  */
};

export default Item;
