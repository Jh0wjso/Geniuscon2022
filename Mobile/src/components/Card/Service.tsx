import { useTheme } from "native-base";
import { View, VStack, Text } from "native-base";
import { Image } from "react-native";

export function Service(){

    const { colors } = useTheme();

    return(
        <VStack>
            <Image
                source={require("../../assets/products/tractor.png")}
            />
            <VStack
                bg={colors.gray['100']}
                alignItems={"center"}
                width = {"100%"}
            >
                <Text
                    fontWeight={"bold"}
                    fontSize={27}
                    borderBottomWidth={0.5}
                    padding={2}
                >
                    NOME DO TRATOR
                </Text>
                <Text
                    fontSize={15}
                    borderBottomWidth={0.5}
                    padding={2} 
                >
                    Colheitadeira
                </Text>

                <Text
                    fontSize={15}
                    borderBottomWidth={0.5}
                    padding={2} 
                >
                    John Deere
                </Text>
                <Text
                    fontSize={15}
                    borderBottomWidth={0.5}
                    padding={2} 
                >
                    Fazenda São João
                </Text>
                <Text
                    fontSize={15}
                    borderBottomWidth={0.5}
                    padding={2} 
                >
                    R$ 100/dia
                </Text>
            </VStack>
        </VStack>
    )
}