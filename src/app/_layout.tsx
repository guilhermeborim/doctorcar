import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { Slot } from "expo-router";
import { Provider } from "react-redux";
import { AuthUser } from "../service/auth";
import { store } from "../store/store";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <AuthUser>
      <Provider store={store}>
        <Slot />
      </Provider>
    </AuthUser>
  );
}
