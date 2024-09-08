import { colors } from "@/src/constants";
import family from "@/src/constants/family";
import { statusBarHeight } from "@/src/hooks/statusBarHeight";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: statusBarHeight + 23,
  },
  header: {
    paddingBottom: 20,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontFamily: family.semiBold,
    fontSize: 20,
    color: colors.black,
    paddingLeft: 28,
  },
  subheader: {
    paddingTop: 14,
    paddingBottom: 45,
    paddingLeft: 28,
    paddingRight: 28,
    gap: 9,
  },
  subHeaderTitle: {
    fontFamily: family.medium,
    fontSize: 20,
    color: colors.black,
  },
  subHeaderDescription: {
    fontFamily: family.regular,
    fontSize: 14,
    color: colors.subTitle,
  },
  form: {
    paddingLeft: 28,
    paddingRight: 28,
    paddingBottom: 28,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  InputEmail: {
    paddingLeft: 28,
    borderWidth: 1,
    borderColor: colors.buttonPrimary,
    width: "100%",
    borderRadius: 50,
    height: 64,
  },
  inputFocus: {
    borderColor: colors.buttonPrimary,
  },
  inputBlur: {
    borderColor: "#CFD3D4",
  },
  formPassword: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.buttonPrimary,
    borderRadius: 50,
    marginTop: 18,
    paddingLeft: 28,
    paddingRight: 28,
  },
  inputPassword: {
    width: "90%",
    height: 64,
  },
  containerButton: {
    marginTop: 30,
    gap: 25,
  },
  containerForget: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  forgetPassword: {
    color: colors.black,
    fontFamily: family.regular,
    fontSize: 14,
    opacity: 0.5,
  },
  newPassword: {
    textDecorationLine: "underline",
    color: colors.buttonPrimary,
    fontFamily: family.medium,
    fontSize: 14,
  },
  error: {
    color: colors.errors,
    fontFamily: family.semiBold,
    fontSize: 12,
    paddingLeft: 28,
    paddingTop: 5,
  },
});
