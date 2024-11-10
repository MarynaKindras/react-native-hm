import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../styles/global";

const Button = ({ children, onPress, buttonStyle, disabled = false }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: disabled ? colors.disabled_gray : colors.orange },
        buttonStyle,
      ]}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: colors.orange,
    borderRadius: 100,
  },
});

export default Button;
