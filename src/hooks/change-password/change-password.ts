import baseUrl from "@/src/service/axios";
import axios from "axios";
import { Alert } from "react-native";

export interface changePasswordInterface {
  email: string;
  oldPassword: string;
  newPassword: string;
}

const changePassword = async (dataLogin: changePasswordInterface) => {
  try {
    const { data } = await baseUrl.post("/user/change-password", dataLogin);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (!error.response) {
        Alert.alert(
          "Erro de Conexão",
          "Não foi possível conectar ao servidor. Verifique sua conexão com a internet ou tente novamente mais tarde.",
        );
      } else {
        throw new Error(error.response.data.message);
      }
    } else {
      Alert.alert(
        "Erro inesperado",
        "Algo deu errado. Tente novamente mais tarde.",
      );
    }
  }
};

export default changePassword;
