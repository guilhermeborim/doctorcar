import { colors, fontFamily } from "@/src/constants";
import { statusBarHeight } from "@/src/constants/statusBarHeight";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight + 23,
    paddingHorizontal: 28,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  welcome: {
    fontFamily: fontFamily.medium,
    fontSize: 18,
    color: colors.subTitle,
  },
  name: {
    fontFamily: fontFamily.semiBold,
    fontSize: 22,
    color: colors.subTitle,
    paddingTop: 12,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 50,
    backgroundColor: colors.subTitle,
    display: "flex",
  },
  //
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
