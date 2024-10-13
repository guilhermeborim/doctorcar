import { Stack, usePathname } from "expo-router";

export default function Layout() {
  const route = "/vehicle/maintenance";
  const pathname = usePathname();

  return (
    <Stack>
      <Stack.Screen
        name="dashboard"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="vehicle"
        options={{
          title: "Veículo",
          headerShown: pathname !== route,
        }}
      />
    </Stack>
  );
}
