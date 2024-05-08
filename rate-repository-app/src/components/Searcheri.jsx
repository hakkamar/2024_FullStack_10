import { Searchbar } from "react-native-paper";

import styles from "./styles";

const Searcheri = ({ setValue, value }) => {
  return (
    <Searchbar
      //style={styles.signInFieldContainer}
      style={styles.containerWhite}
      placeholder="Search"
      onChangeText={setValue}
      value={value}
    />
  );
};

export default Searcheri;
