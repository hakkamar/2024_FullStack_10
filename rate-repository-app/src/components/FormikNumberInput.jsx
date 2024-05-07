import { useField } from "formik";

import NumberInput from "./NumberInput";
import Text from "./Text";

import styles from "./styles";

const FormikNumberInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <NumberInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        //keyboardType={"numeric"}
        inputMode={"numeric"}
        value={String(field.value)}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};
export default FormikNumberInput;
