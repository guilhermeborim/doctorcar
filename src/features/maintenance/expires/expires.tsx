import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./style";

export default function Expires() {
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
      <View style={styles.containerMaintenance}>
        <View style={styles.containerMaintenanceImage}>
          <Text>a</Text>
        </View>
        <View style={styles.containerMaintenanceContent}>
          <View>
            <Text style={styles.maintenanceTitle}>Troca de Óleo</Text>
            <Text style={styles.maintenanceSubTitle}>Feito com 20.000KM</Text>
          </View>
          <View>
            <Text style={styles.maintenanceCar}>FIAT - Mobi</Text>
            <View style={styles.containerMaintenancePrice}>
              <FontAwesome name="money" size={20} color={"#40189D"} />
              <Text style={styles.maintenancePrice}>R$ 100,00</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
