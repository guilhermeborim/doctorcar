import { getMaintenanceAsync } from "@/src/store/maintenance/get/actions";
import { useAppDispatch, useTypedSelector } from "@/src/store/store";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

export default function Expires() {
  const dispatch = useAppDispatch();
  const { data, success, loading } = useTypedSelector(
    (state) => state.getMaintenanceReducer,
  );

  useEffect(() => {
    if (!loading && !success && data.length === 0) {
      dispatch(getMaintenanceAsync());
    }
  }, [success, data, loading]);
  console.log(data.map((maintenance) => maintenance.service_coast));
  return (
    <View style={styles.containerMaintenancesExpires}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.containerMaintenancesExpiresTitle}>
          Manutenções Expirando
        </Text>
        <Text>Ver Todas</Text>
      </View>
      {data.map((maintenance, index) => (
        <View key={index} style={styles.containerMaintenance}>
          <View style={styles.containerMaintenanceImage}>
            <Text>a</Text>
          </View>
          <View style={styles.containerMaintenanceContent}>
            <View>
              <Text style={styles.maintenanceTitle}>
                {maintenance.maintenance_type}
              </Text>
              <Text style={styles.maintenanceSubTitle}>
                Feito com {maintenance.kilometers_at_service}KM
              </Text>
            </View>
            <View>
              <Text style={styles.maintenanceCar}>{maintenance.model}</Text>
              <View style={styles.containerMaintenancePrice}>
                <FontAwesome name="money" size={20} color={"#40189D"} />
                <Text style={styles.maintenancePrice}>
                  R$ {maintenance.service_coast},00
                </Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
