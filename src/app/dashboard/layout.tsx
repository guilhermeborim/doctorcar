import { FontAwesome } from "@expo/vector-icons";
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
    </Tabs>
  );
}
