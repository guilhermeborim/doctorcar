import { colors, fontFamily } from "@/src/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 28,
    marginVertical: 30,
  },
  cardMaintenance: {
    backgroundColor: "#5c44f1",
    borderRadius: 20,
    padding: 10,
    width: 150,
    height: 150,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    overflow: "hidden",
  },
  cardVehicle: {
    backgroundColor: "#6bbdff",
    borderRadius: 20,
    padding: 10,
    width: 150,
    height: 150,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    overflow: "hidden",
  },
  cardNumber: {
    fontFamily: fontFamily.semiBold,
    fontSize: 40,
    color: colors.white,
  },
  cardText: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    color: colors.white,
  },
});
