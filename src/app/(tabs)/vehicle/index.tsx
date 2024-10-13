import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Veiculo() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable onPress={() => router.push("/vehicle/maintenance")}>
        <Text>teste</Text>
      </Pressable>
    </View>
  );
}
