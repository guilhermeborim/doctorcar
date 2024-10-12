import { colors, fontFamily } from "@/src/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerVehicles: {
    paddingBottom: 28,
    gap: 20,
  },
  containerVehiclesTitle: {
    paddingLeft: 28,
    color: "#3D3D3D",
    fontFamily: fontFamily.medium,
    fontSize: 22,
  },
  containerVehicle: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    paddingLeft: 28,
    paddingTop: 20,
    width: "100%",
    height: 154,
    backgroundColor: colors.white,
  },
  containerVehicleImage: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  containerVehicleHeader: {
    gap: 7,
    paddingBottom: 10,
  },
  vehicleTitle: {
    color: "#212121",
    fontFamily: fontFamily.regular,
    fontSize: 14,
  },
  vehicleSubTitle: {
    color: "#212121",
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
  },
  containerVehiclePlaca: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  vehicleCar: {
    color: "#121212",
    fontFamily: fontFamily.medium,
    fontSize: 16,
  },
  containerVehiclePrice: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  vehiclePrice: {
    color: "#40189D",
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
  },
});
