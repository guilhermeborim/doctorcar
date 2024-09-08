import Background from "@/assets/images/pageBackground.png";
import VectorTwo from "@/assets/images/Vector-2.png";
import Vector from "@/assets/images/Vector.png";
import getUser from "@/src/hooks/get-user/get-user";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./style";

export default function DashboardComponent() {
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <Image source={Background} style={{ position: "relative" }} />
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcome}>Seja Bem-Vindo</Text>
            <Text style={styles.name}>Guilherme Machado Borim</Text>
          </View>
          <View style={styles.avatar}></View>
        </View>
      </View>
      <ScrollView style={{ backgroundColor: "#FBF6FF" }}>
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
              <Text style={styles.cardText}>
                Manutenções Cadastradas em Geral
              </Text>
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
        <View style={styles.containerMaintenancesExpires}>
          <View>
            <Text style={styles.containerMaintenancesExpiresTitle}>
              Manutenções Expirando
            </Text>
          </View>
          <View>
            <View style={styles.containerMaintenance}>
              <View style={styles.containerMaintenanceImage}>
                <Text>a</Text>
              </View>
              <View style={styles.containerMaintenanceContent}>
                <Text style={styles.maintenanceTitle}>Troca de Óleo</Text>
                <Text style={styles.maintenanceSubTitle}>
                  Feito com 20.000KM
                </Text>
                <Text style={styles.maintenanceCar}>FIAT - Mobi</Text>
                <View style={styles.containerMaintenancePrice}>
                  <FontAwesome name="money" size={20} color={"#40189D"} />
                  <Text style={styles.maintenancePrice}>R$ 100,00</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
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
                    <FontAwesome name="calendar" size={20} color={"blue"} />
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
      </ScrollView>
    </>
  );
}
