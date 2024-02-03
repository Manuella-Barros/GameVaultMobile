import {HStack, View, VStack, Text, Divider} from "native-base";
import BackgroundGradientImage from "../../components/backgroundGradientImage/BackgroundGradientImage";
import gameBackground from "../../assets/images/gameBackground-3.jpg"
import {CaretRight, List} from "phosphor-react-native";
function Home() {
    return (
        <VStack backgroundColor={"gray.900"} height={"full"}>

            <BackgroundGradientImage imgSource={gameBackground}/>

            <View justifyContent={"space-between"} height={"full"} px={7} py={10}>
                <HStack justifyContent={"space-between"} >
                    <List size={25} color={"white"}/>
                    <CaretRight size={25} color={"white"}/>
                </HStack>

                <VStack space={2}>
                    <Text color={"white"} fontSize={20}>Valorant</Text>

                    <HStack>
                        <Text color={"white"} paddingRight={3}>PC</Text>
                        <Divider orientation={"vertical"}/>

                        <Text color={"white"} px={3}>02/06/2020</Text>
                        <Divider orientation={"vertical"}/>

                        <Text color={"white"} paddingLeft={3}>Riot Games</Text>
                    </HStack>

                    <Text color={"white"}>
                        Valorant is a team-based tactical shooter and first-person shooter set in the near-future.
                        Players
                        assume the control of agents, characters who come from a plethora of countries and cultures
                        around the world. In the main game mode, players join either the
                    </Text>
                </VStack>
            </View>
        </VStack>
    );
}

export default Home;