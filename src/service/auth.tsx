import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { checkTokenExpiration } from "./checkToken";

export const AuthUser = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      const tokenIsValid = await checkTokenExpiration(token);

      if (tokenIsValid) {
        router.replace("/dashboard");
      } else {
        router.replace("/login");
      }
    };
    checkToken();
  }, [router]);

  return <>{children}</>;
};
