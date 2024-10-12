import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Vehicle() {
  return (
    <View style={styles.containerVehicles}>
      <Text style={styles.containerVehiclesTitle}>Seus Veículos</Text>
      <View style={{ gap: 12 }}>
        <View style={styles.containerVehicle}>
          <View style={styles.containerVehicleImage}>
            <Text>a</Text>
          </View>
          <View>
            <View style={styles.containerVehicleHeader}>
              <Text style={styles.vehicleTitle}>
                Fabbrica Italiana di Automoili Torno
              </Text>
              <Text style={styles.vehicleSubTitle}>Mobi</Text>
            </View>
            <View>
              <View style={styles.containerVehiclePlaca}>
                <FontAwesome name="car" size={17} color={"blue"} />
                <Text style={styles.vehicleCar}>ABC1234</Text>
              </View>
              <View style={styles.containerVehiclePlaca}>
                <FontAwesome name="calendar" size={20} color={"blue"} />
                <Text style={styles.vehicleCar}>2012 - Seminovo</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
