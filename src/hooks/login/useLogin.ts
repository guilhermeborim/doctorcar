import { zodResolver } from "@hookform/resolvers/zod";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";
import { z } from "zod";
import signIn, { LoginInterface } from "./login";

const formSchema = z.object({
  email: z.string().email("Por Favor, insira um email válido"),
  password: z.string().min(4, "A senha deve ter no mínimo 4 caracteres"),
});

export const useLoginForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    clearErrors,
    getValues,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const clearAllErrors = () => {
    Object.keys(errors).forEach((fieldName) => {
      clearErrors(fieldName as keyof typeof errors);
    });
  };
  return { control, handleSubmit, register, errors, clearAllErrors, getValues };
};

export const useSubmitLogin = async (data: LoginInterface) => {
  try {
    const response = await signIn(data);

    if (response.data) {
      await AsyncStorage.setItem("token", response.data);
      router.replace("/dashboard");
    }
  } catch (error: any) {
    Alert.alert(error.message);
  }
};
