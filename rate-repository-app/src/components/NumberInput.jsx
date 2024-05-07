import { TextInput as NativeTextInput } from "react-native";

import styles from "./styles";

const NumberInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput, error && styles.errorBorder, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default NumberInput;
