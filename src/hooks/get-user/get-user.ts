import baseUrl from "@/src/service/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert } from "react-native";

export interface UserInterface {
  data: {
    name: string;
    profilePicture: string;
  };
}

const getUser = async () => {
  try {
    const token = await AsyncStorage.getItem("token");

    const { data } = await baseUrl.get<UserInterface>("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
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

export default getUser;
