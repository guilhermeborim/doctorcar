import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { Alert } from "react-native";

export const checkTokenExpiration = async (token: string | null) => {
  if (token) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);

      const tokenExpirationTime = decoded.exp && decoded.exp * 1000;
      const currentTime = Date.now();

      if (tokenExpirationTime && currentTime >= tokenExpirationTime) {
        Alert.alert("Sessão expirada", "Por favor, faça login novamente");
        await AsyncStorage.removeItem("token");
        return false;
      }
      return true;
    } catch (error) {
      console.log(error);
      await AsyncStorage.removeItem("token");
      return false;
    }
  }
  return false;
};
