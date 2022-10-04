import { AspectRatio, Box, Button, Heading, HStack, Image, Text, useTheme, VStack } from "native-base";
import { Header } from "../components/Header";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import logo from '../assets/album/santuario.jpg';
import { ScrollView } from "react-native";

export function Home() {

  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <>
      <Header />
      <ScrollView
        style={{flex: 1, marginBottom: 10, backgroundColor: "gray.100"}}
      >
      
      <Heading textAlign="center" mt={6}>Locação</Heading>
      <HStack space={2} alignItems="center" mt={2} justifyContent="space-evenly" px={6}  >
        <VStack alignItems="center" mt={6} justifyContent="center" space={1}  >
          <Button onPress={() => navigation.navigate('Turismo')} borderRadius={999} w={16} h={16} variant="outline" borderWidth={2} borderColor="green.600" _pressed={{ bg: "green.200" }}>
            <MaterialCommunityIcons name="tractor-variant" size={28} color={colors.green['600']} />
          </Button>
          <Text>Colheitadeira</Text>
        </VStack>
        <VStack alignItems="center" mt={6} justifyContent="center" space={1} >
          <Button onPress={() => navigation.navigate('Hotel')} borderRadius={999} w={16} h={16} variant="outline" borderWidth={2} borderColor="green.600" _pressed={{ bg: "green.200" }}>
            <MaterialCommunityIcons name="tractor" size={28} color={colors.green['600']} />
          </Button>
          <Text>Tratores</Text>
        </VStack>
        <VStack alignItems="center" mt={6} justifyContent="center" space={1} >
          <Button onPress={() => navigation.navigate('Restaurante')} borderRadius={999} w={16} h={16} variant="outline" borderWidth={2} borderColor="green.600" _pressed={{ bg: "green.200" }}>
            <MaterialCommunityIcons name="cube-outline" size={28} color={colors.green['600']} />
          </Button>
          <Text>Colherdor de Cana</Text>
        </VStack>
      </HStack>
      <HStack space={2} alignItems="center" mt={2} justifyContent="space-evenly" px={6}  >
        <VStack alignItems="center" mt={6} justifyContent="center" space={1} >
          <Button onPress={() => navigation.navigate('Historia')} borderRadius={999} w={16} h={16} variant="outline" borderWidth={2} borderColor="green.600" _pressed={{ bg: "green.200" }}>
            <MaterialCommunityIcons name="sprout-outline" size={28} color={colors.green['600']} />
          </Button>
          <Text>Grades</Text>
        </VStack>
        <VStack alignItems="center" mt={6} justifyContent="center" space={1}  >
          <Button onPress={() => navigation.navigate('Promocoes')} borderRadius={999} w={16} h={16} variant="outline" borderWidth={2} borderColor="green.600" _pressed={{ bg: "green.200" }}>
            <MaterialCommunityIcons name="bug" size={28} color={colors.green['600']} />
          </Button>
          <Text>Pulverizadores</Text>
        </VStack>
        <VStack alignItems="center" mt={6} justifyContent="center" space={1} >
          <Button onPress={() => navigation.navigate('Comunicados')} borderRadius={999} w={16} h={16} variant="outline" borderWidth={2} borderColor="green.600" _pressed={{ bg: "green.200" }}>
            <MaterialCommunityIcons name="spa-outline" size={28} color={colors.green['600']} />
          </Button>
          <Text>Semeadoras</Text>
        </VStack>
      </HStack>
    </ScrollView>
    </>
  )
}