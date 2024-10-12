import { colors, fontFamily } from "@/src/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerMaintenancesExpires: {
    paddingHorizontal: 28,
    paddingBottom: 28,
    gap: 20,
  },
  containerMaintenancesExpiresTitle: {
    color: "#3D3D3D",
    fontFamily: fontFamily.medium,
    fontSize: 22,
  },
  containerMaintenance: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 20,
    paddingHorizontal: 28,
    paddingVertical: 20,
    backgroundColor: colors.white,
    borderRadius: 12,
  },
  containerMaintenanceImage: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  containerMaintenanceContent: {
    gap: 10,
  },
  maintenanceTitle: {
    color: "#212121",
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
  },
  maintenanceSubTitle: {
    color: "#212121",
    fontFamily: fontFamily.regular,
    fontSize: 14,
  },
  maintenanceCar: {
    color: "#ABAFB1",
    fontFamily: fontFamily.regular,
    fontSize: 12,
  },
  containerMaintenancePrice: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  maintenancePrice: {
    color: "#40189D",
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
  },
});
