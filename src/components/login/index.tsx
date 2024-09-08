import { useLoginForm, useSubmitLogin } from "@/src/hooks/login/useLogin";
import { FontAwesome } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import ButtonComponent from "../button";
import ErrorComponent from "../errors";
import { styles } from "./style";

export default function LoginComponent() {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const { control, register, handleSubmit, errors } = useLoginForm();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Entrar</Text>
      </View>
      <View style={styles.subheader}>
        <Text style={styles.subHeaderTitle}>Entre em sua conta</Text>
        <Text style={styles.subHeaderDescription}>
          Entre com seus dados de cadastro
        </Text>
      </View>
      <View style={styles.form}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                placeholder="E-mail"
                {...register("email")}
                value={value}
                style={[
                  styles.InputEmail,
                  isFocusedEmail ? styles.inputFocus : styles.inputBlur,
                ]}
                onFocus={() => setIsFocusedEmail(true)}
                onBlur={() => setIsFocusedEmail(false)}
                onChangeText={(value) => onChange(value)}
              />
              <ErrorComponent message={errors.email?.message} />
            </View>
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <View
                style={[
                  styles.formPassword,
                  isFocusedPassword ? styles.inputFocus : styles.inputBlur,
                ]}
              >
                <TextInput
                  placeholder="Senha"
                  {...register("password")}
                  value={value}
                  style={styles.inputPassword}
                  onFocus={() => setIsFocusedPassword(true)}
                  onBlur={() => setIsFocusedPassword(false)}
                  onChangeText={(value) => onChange(value)}
                  secureTextEntry
                />
                <FontAwesome name="eye" size={20} />
              </View>
              <ErrorComponent message={errors.password?.message} />
            </>
          )}
        />
        <View style={styles.containerButton}>
          <ButtonComponent
            primary
            text="Entrar"
            onPress={handleSubmit(useSubmitLogin)}
          />
          <View style={styles.containerForget}>
            <Text style={styles.forgetPassword}>Esqueceu a senha?</Text>
            <Link href={"/change-password"}>
              <Text style={styles.newPassword}>Nova senha</Text>
            </Link>
          </View>
        </View>
      </View>
      <ButtonComponent
        text="Crie sua conta"
        primary={false}
        onPress={() => router.push("/register")}
      />
    </View>
  );
}
