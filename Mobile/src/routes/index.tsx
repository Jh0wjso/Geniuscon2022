import { createDrawerNavigator } from "@react-navigation/drawer";
import { useTheme } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Home } from "../screens/Home";
import { Insumos } from "../screens/Insumos";
import { Serviços } from "../screens/Serviços";
import { Clima } from "../screens/Clima";
import { Mapa } from "../screens/Mapa";
import { Locacao } from "../screens/Locacao";

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
        component={Serviços}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="account-hard-hat" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Mapa"
        component={Mapa}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="google-maps" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Locação"
        component={Locacao}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="briefcase-search" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Clima"
        component={Clima}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="weather-partly-cloudy" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Insumos"
        component={Insumos}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="seed" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}