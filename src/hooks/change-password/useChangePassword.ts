import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";
import { z } from "zod";
import changePassword, { changePasswordInterface } from "./change-password";

const formSchema = z.object({
  email: z.string().email("Por Favor, insira um email válido"),
  oldPassword: z
    .string()
    .min(4, "A senha antiga deve ter no mínimo 4 caracteres"),
  newPassword: z
    .string()
    .min(4, "A senha nova deve ter no mínimo 4 caracteres"),
});

export const useChangePasswordForm = () => {
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
      oldPassword: "",
      newPassword: "",
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

export const useSubmitChangePassword = async (
  data: changePasswordInterface,
) => {
  try {
    const response = await changePassword(data);

    if (response.data) {
      Alert.alert("Senha alterada com sucesso!");
      setTimeout(() => {
        router.replace("/login");
      }, 2000);
    }
  } catch (error: any) {
    Alert.alert(error.message);
  }
};
