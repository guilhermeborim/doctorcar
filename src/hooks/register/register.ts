import baseUrl from "@/src/service/axios";
import axios from "axios";
import { Alert } from "react-native";

export interface RegisterInterface {
  name: string;
  email: string;
  password: string;
}

const register = async (dataRegister: RegisterInterface) => {
  try {
    const { data } = await baseUrl.post("/user", dataRegister);
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

export default register;
