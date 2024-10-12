import VectorTwo from "@/assets/images/Vector-2.png";
import Vector from "@/assets/images/Vector.png";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function Banner() {
  return (
    <View style={styles.containerCard}>
      <View style={styles.cardMaintenance}>
        <View style={{ position: "relative" }}>
          <Image
            source={Vector}
            style={{
              position: "absolute",
              left: 45,
              top: 50,
              opacity: 0.2,
            }}
          />
          <Text style={styles.cardNumber}>2</Text>
          <Text style={styles.cardText}>Manutenções Cadastradas em Geral</Text>
        </View>
      </View>
      <View style={styles.cardVehicle}>
        <View style={{ position: "relative" }}>
          <Image
            source={VectorTwo}
            style={{ position: "absolute", left: 45, top: 50 }}
          />
          <Text style={styles.cardNumber}>3</Text>
          <Text style={styles.cardText}>Veículos Cadastrados</Text>
        </View>
      </View>
    </View>
  );
}
