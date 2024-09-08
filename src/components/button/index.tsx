import { colors, fontFamily } from "@/src/constants";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ButtonProps = {
  text: string;
  primary: boolean;
  onPress: () => void;
};

export default function ButtonComponent({
  onPress,
  text,
  primary,
}: ButtonProps) {
  const buttonStyle = primary
    ? [styles.inputButton, styles.primary]
    : [styles.inputButton, styles.secondary];

  return (
    <View style={primary ? styles.buttonContainer : styles.buttonSecondary}>
      <TouchableOpacity onPress={onPress}>
        <Text style={buttonStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.buttonPrimary,
    borderRadius: 50,
  },
  buttonSecondary: {
    borderRadius: 50,
    backgroundColor: colors.buttonSecundary,
    marginRight: 28,
    marginLeft: 28,
    marginTop: 28,
  },
  inputButton: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    textTransform: "uppercase",
    textAlign: "center",
    paddingTop: 25,
    paddingBottom: 25,
  },
  primary: {
    color: colors.white,
  },
  secondary: {
    color: colors.buttonPrimary,
  },
});
