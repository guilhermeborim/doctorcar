import { FontAwesome } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarActiveTintColor: "#40189D",
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, focused, size }) => {
            if (focused) {
              return <FontAwesome name="home" size={size} color={"#40189D"} />;
            }

            return <FontAwesome name="home" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarActiveTintColor: "#40189D",
          headerShown: false,
          title: "Perfil",
          tabBarIcon: ({ color, focused, size }) => {
            if (focused) {
              return <AntDesign name="user" size={size} color={"#40189D"} />;
            }

            return <AntDesign name="user" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
