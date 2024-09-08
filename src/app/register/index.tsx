import RegisterComponent from "@/src/components/register";
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

export default function Register() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <RegisterComponent />
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
