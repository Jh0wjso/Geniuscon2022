import { createDrawerNavigator } from "@react-navigation/drawer";
import { useTheme } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StackRoutes, StackRoutesHotel, StackRoutesPromocoes, StackRoutesRestaurante } from "./StackRoutes";
import { Home } from "../screens/Home";
import { Contato } from "../screens/Contato";
import { Historia } from "../screens/Historia";
import { Comunicado } from "../screens/Comunicado";

const Drawer = createDrawerNavigator();

export function Routes() {
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.gray[100],
        },
        drawerActiveBackgroundColor: colors.green[600],
        drawerActiveTintColor: colors.gray[100],
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={Home}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Serviços"
        component={Historia}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="account-hard-hat" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Mapa"
        component={StackRoutes}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="google-maps" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Locação"
        component={StackRoutesHotel}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="briefcase-search" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Clima"
        component={StackRoutesRestaurante}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="weather-partly-cloudy" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Insumos"
        component={StackRoutesPromocoes}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="seed" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}