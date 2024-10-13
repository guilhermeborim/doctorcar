import { MaintenanceExpires } from "@/src/features/maintenance/index";
import { VehicleDashboard } from "@/src/features/vehicles/index";
import { useAppDispatch, useTypedSelector } from "@/src/store/store";
import { getUserAsync } from "@/src/store/user/get/actions";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import Banner from "../banner";
import { styles } from "./style";

export default function DashboardComponent() {
  const dispatch = useAppDispatch();

  const { data } = useTypedSelector((state) => state.getUserReducer);

  useEffect(() => {
    if (!data) {
      dispatch(getUserAsync());
    }
  }, [data]);

  return (
    <ScrollView style={{ backgroundColor: "#FBF6FF" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcome}>Seja Bem-Vindo</Text>
            <Text style={styles.name}>{data?.name}</Text>
            <Pressable onPress={() => router.push("/vehicle")}>
              <Text>Veiculo</Text>
            </Pressable>
          </View>
          <Image
            source={{ uri: data?.profile_picture }}
            style={{ width: 46, height: 46, borderRadius: 50 }}
          />
        </View>
      </View>
      <Banner />
      <MaintenanceExpires />
      <VehicleDashboard />
    </ScrollView>
  );
}
