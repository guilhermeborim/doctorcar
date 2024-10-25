import { useAppDispatch, useTypedSelector } from "@/src/store/store";
import { getVehicleAsync } from "@/src/store/vehicle/get/actions";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Vehicle() {
  const dispatch = useAppDispatch();
  const { data, success, loading } = useTypedSelector(
    (state) => state.getVehicleReducer,
  );

  useEffect(() => {
    if (!loading && !success && data.length === 0) {
      dispatch(getVehicleAsync());
    }
  }, [success, data, loading]);

  return (
    <View style={styles.containerVehicles}>
      <Text style={styles.containerVehiclesTitle}>Seus Veículos</Text>
      <View style={{ gap: 12 }}>
        {data.map((vehicle, index) => (
          <View key={index} style={styles.containerVehicle}>
            <View style={styles.containerVehicleImage}>
              <Text>a</Text>
            </View>
            <View>
              <View style={styles.containerVehicleHeader}>
                <Text style={styles.vehicleTitle}>
                  Fabbrica Italiana di Automobili Torino
                </Text>
                <Text style={styles.vehicleSubTitle}>{vehicle.model}</Text>
              </View>
              <View>
                <View style={styles.containerVehiclePlaca}>
                  <FontAwesome name="car" size={17} color={"blue"} />
                  <Text style={styles.vehicleCar}>{vehicle.license_plate}</Text>
                </View>
                <View style={styles.containerVehiclePlaca}>
                  <FontAwesome name="calendar" size={20} color={"blue"} />
                  <Text style={styles.vehicleCar}>{vehicle.year}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
