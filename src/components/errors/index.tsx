import { colors, fontFamily } from "@/src/constants";
import { StyleSheet, Text, View } from "react-native";

export default function ErrorComponent({ message }: { message?: string }) {
  return (
    <View>
      <Text style={styles.error}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: colors.errors,
    fontFamily: fontFamily.semiBold,
    fontSize: 12,
    paddingLeft: 28,
    paddingTop: 5,
  },
});
