import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetalhePromocoes } from '../components/DetalheContainer/DetalhePromocoes';
import { Detalhe } from '../screens/Detalhe';
import { DetalhePromotion } from '../screens/DetalhePromotion';
import { Locacao } from '../screens/Locacao';
import { Promocoes } from '../screens/Promocoes';
import { Restaurantes } from '../screens/Restaurantes';
import { Mapa } from '../screens/Mapa';

const Stack = createNativeStackNavigator();
const Stack2 = createNativeStackNavigator();
const Stack3 = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="TurismoStack" component={Mapa} />
      <Stack.Screen name="Detalhe" component={Detalhe} />
    </Stack.Navigator>
  );
}

export function StackRoutesRestaurante() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="RestauranteStack" component={Restaurantes} />
      <Stack.Screen name="Detalhe" component={Detalhe} />
    </Stack.Navigator>
  );
}

export function StackRoutesPromocoes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="PromocoesStack" component={Promocoes} />
      <Stack.Screen name="DetalhePromotion" component={DetalhePromotion} />
    </Stack.Navigator>
  );
}