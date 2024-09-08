import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";
import { z } from "zod";
import register, { RegisterInterface } from "./register";

const formSchema = z.object({
  name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
  email: z.string().email("Por Favor, insira um email válido"),
  password: z.string().min(4, "A senha deve ter no mínimo 4 caracteres"),
});

export const useRegisterForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    clearErrors,
    getValues,
  } = useForm({
    defaultValues: {
      name: "",
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

  return {
    control,
    handleSubmit,
    register,
    errors,
    clearErrors,
    clearAllErrors,
    getValues,
  };
};

export const useSubmitRegister = async (data: RegisterInterface) => {
  try {
    const response = await register(data);

    if (response.status === 200) {
      Alert.alert("Cadastro realizado com sucesso!");
      setTimeout(() => {
        router.replace("/login");
      }, 2000);
    }
  } catch (error: any) {
    Alert.alert(error.message);
  }
};
