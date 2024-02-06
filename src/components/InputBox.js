import { StyleSheet, Text, View, TextInput } from "react-native";
import { Colors } from "../constants/Constants";

const Email = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="email address"
        placeholderTextColor={Colors.light}
        autoCapitalize="none"
        keyboardType="email-address"
        value={value}
        onChangeText={(text) => onChange(text)}
        keyboardAppearance="dark"
      />
    </View>
  );
};

const Password = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="password"
        placeholderTextColor={Colors.light}
        secureTextEntry={true}
        value={value}
        onChangeText={(text) => onChange(text)}
        keyboardAppearance="dark"
      />
    </View>
  );
};

const InputBox = ({ type, value, onChange }) => {
  return type === "email" ? (
    <Email value={value} onChange={onChange} />
  ) : (
    <Password value={value} onChange={onChange} />
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "5%",
    marginBottom: "10%",
  },
  inputLabel: {
    fontFamily: "SF",
    fontSize: 18,
  },
  input: {
    marginTop: "2%",
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
    fontFamily: "SF",
  },
});
