import { Pressable, View } from "react-native";

import Text from "./Text";

import styles from "./styles";

const Button = ({ children, style, ...props }) => {
  const buttonStyle = [styles.buttonContainer, style];

  return (
    <Pressable {...props}>
      <View style={buttonStyle}>
        <Text style={styles.text} fontWeight="bold">
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;
