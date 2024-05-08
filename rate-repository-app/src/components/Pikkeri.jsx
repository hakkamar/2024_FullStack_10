import { Picker } from "@react-native-picker/picker";
import { useState, useRef } from "react";

const Pikkeri = ({ setHakuEhdot }) => {
  const [valinta, setValinta] = useState("Latest");

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const asetaValinta = (itemValue) => {
    setValinta(itemValue);
    setHakuEhdot(itemValue);
  };

  return (
    <Picker
      ref={pickerRef}
      selectedValue={valinta}
      onValueChange={(itemValue, _itemIndex) => asetaValinta(itemValue)}
    >
      <Picker.Item label="Latest repositories" value="Latest" />
      <Picker.Item label="Highest rated repositories" value="Highest" />
      <Picker.Item label="Lowest rated repositories" value="Lowest" />
    </Picker>
  );
};

export default Pikkeri;
