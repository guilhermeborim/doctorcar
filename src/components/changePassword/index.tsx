import {
  useChangePasswordForm,
  useSubmitChangePassword,
} from "@/src/hooks/change-password/useChangePassword";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import ButtonComponent from "../button";
import ErrorComponent from "../errors";
import { styles } from "./style";

export default function ChangePasswordComponent() {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const { handleSubmit, register, control, errors } = useChangePasswordForm();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Esqueceu sua senha</Text>
      </View>
      <View style={styles.subheader}>
        <Text style={styles.subHeaderTitle}>Crie uma nova senha</Text>
        <Text style={styles.subHeaderDescription}>
          Digite sua nova senha desejada
        </Text>
      </View>
      <View style={styles.form}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                placeholder="E-mail"
                {...register("email")}
                style={[
                  styles.InputEmail,
                  { marginTop: 8 },
                  isFocusedEmail ? styles.inputFocus : styles.inputBlur,
                ]}
                onFocus={() => setIsFocusedEmail(true)}
                onBlur={() => setIsFocusedEmail(false)}
                value={value}
                onChangeText={(value) => onChange(value)}
              />
              <ErrorComponent message={errors.email?.message} />
            </>
          )}
        />
        <Controller
          name="oldPassword"
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <View
                style={[
                  styles.formPassword,

                  isFocusedPassword ? styles.inputFocus : styles.inputBlur,
                ]}
              >
                <TextInput
                  placeholder="Senha antiga"
                  {...register("oldPassword")}
                  value={value}
                  style={styles.inputPassword}
                  onChangeText={(value) => onChange(value)}
                  onFocus={() => setIsFocusedPassword(true)}
                  onBlur={() => setIsFocusedPassword(false)}
                  secureTextEntry
                />
                <FontAwesome name="eye" size={20} />
              </View>
              <ErrorComponent message={errors.oldPassword?.message} />
            </>
          )}
        />
        <Controller
          name="newPassword"
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <View
                style={[
                  styles.formPassword,

                  isFocusedPassword ? styles.inputFocus : styles.inputBlur,
                ]}
              >
                <TextInput
                  placeholder="Senha nova"
                  {...register("newPassword")}
                  value={value}
                  style={styles.inputPassword}
                  onChangeText={(value) => onChange(value)}
                  onFocus={() => setIsFocusedPassword(true)}
                  onBlur={() => setIsFocusedPassword(false)}
                  secureTextEntry
                />
                <FontAwesome name="eye" size={20} />
              </View>
              <ErrorComponent message={errors.newPassword?.message} />
            </>
          )}
        />
        <View>
          <ButtonComponent
            primary
            text="Nova senha"
            onPress={handleSubmit(useSubmitChangePassword)}
          />
        </View>
      </View>
      <Text style={styles.textSpan}>Já possui uma conta?</Text>
      <ButtonComponent
        text="Entrar"
        primary={false}
        onPress={() => router.push("/login")}
      />
    </View>
  );
}
