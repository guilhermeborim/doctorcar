import { useAppDispatch, useTypedSelector } from "@/src/store/store";
import { loginAsync } from "@/src/store/user/login/actions";
import { resetUserFlag } from "@/src/store/user/login/reducer";
import { LoginUser } from "@/src/types/user";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import ButtonComponent from "../button";
import { styles } from "./style";

export default function LoginComponent() {
  const dispatch = useAppDispatch();
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const [inputValue, setInputValue] = useState<LoginUser>({
    email: "",
    password: "",
  });

  const { error, success } = useTypedSelector(
    (state) => state.loginUserReducer,
  );
  const onChangeInputValue = (key: string, value: string) => {
    setInputValue({ ...inputValue, [key]: value });
  };

  const onSubmit = () => {
    if (!inputValue.email || !inputValue.password) {
      Alert.alert("Preencha todos os campos");
      return;
    }
    dispatch(loginAsync(inputValue));
  };

  useEffect(() => {
    if (success) {
      dispatch(resetUserFlag());
      router.replace("/(tabs)/dashboard/home");
    }
    if (error && !success) {
      Alert.alert("Erro", error);
    }
  }, [success, error]);

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
        <TextInput
          placeholder="E-mail"
          style={[
            styles.InputEmail,
            isFocusedEmail ? styles.inputFocus : styles.inputBlur,
          ]}
          onFocus={() => setIsFocusedEmail(true)}
          onBlur={() => setIsFocusedEmail(false)}
          onChangeText={(text) => onChangeInputValue("email", text)}
        />
        <View
          style={[
            styles.formPassword,
            isFocusedPassword ? styles.inputFocus : styles.inputBlur,
          ]}
        >
          <TextInput
            placeholder="Senha"
            style={styles.inputPassword}
            onFocus={() => setIsFocusedPassword(true)}
            onBlur={() => setIsFocusedPassword(false)}
            secureTextEntry={isSecureTextEntry}
            onChangeText={(text) => onChangeInputValue("password", text)}
          />
          <FontAwesome
            name="eye"
            size={20}
            onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}
          />
        </View>
        <View style={styles.containerButton}>
          <ButtonComponent primary text="Entrar" onPress={onSubmit} />
          <View style={styles.containerForget}>
            <Text style={styles.forgetPassword}>Esqueceu a senha?</Text>
            <Text style={styles.newPassword}>Nova senha</Text>
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
