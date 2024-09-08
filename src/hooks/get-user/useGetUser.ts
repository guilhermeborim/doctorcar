import { Alert } from "react-native";
import getUser from "./get-user";

export const useGetUser = async () => {
  try {
    const response = await getUser();

    console.log(response);
  } catch (error: any) {
    Alert.alert(error.message);
  }
};
