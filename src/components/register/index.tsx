import {
  useRegisterForm,
  useSubmitRegister,
} from "@/src/hooks/register/useRegister";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import ButtonComponent from "../button";
import ErrorComponent from "../errors";
import { styles } from "./style";

export default function RegisterComponent() {
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const { handleSubmit, register, control, errors } = useRegisterForm();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cadastrar</Text>
      </View>
      <View style={styles.subheader}>
        <Text style={styles.subHeaderTitle}>Crie sua conta</Text>
        <Text style={styles.subHeaderDescription}>
          Por favor, informe suas informações
        </Text>
      </View>
      <View style={styles.form}>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                placeholder="Nome"
                style={[
                  styles.InputEmail,
                  isFocusedName ? styles.inputFocus : styles.inputBlur,
                ]}
                {...register("name")}
                value={value}
                onChangeText={(value) => onChange(value)}
                onFocus={() => setIsFocusedName(true)}
                onBlur={() => setIsFocusedName(false)}
              />
              <ErrorComponent message={errors.name?.message} />
            </>
          )}
        />
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
          name="password"
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
                  placeholder="Senha"
                  {...register("password")}
                  value={value}
                  style={styles.inputPassword}
                  onChangeText={(value) => onChange(value)}
                  onFocus={() => setIsFocusedPassword(true)}
                  onBlur={() => setIsFocusedPassword(false)}
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
            text="Cadastrar"
            onPress={handleSubmit(useSubmitRegister)}
          />
          <View>
            <Text style={styles.termsText}>
              Ao tocar em “Cadastrar” você aceita nossos termos e condições
            </Text>
          </View>
        </View>
      </View>
      <ButtonComponent
        text="Entrar"
        primary={false}
        onPress={() => router.push("/login")}
      />
    </View>
  );
}
