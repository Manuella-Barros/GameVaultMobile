import {HStack, View, VStack, Text, Divider, Button} from "native-base";
import BackgroundGradientImage from "../../components/backgroundGradientImage/BackgroundGradientImage";
import gameBackground from "../../assets/images/gameBackground-3.jpg"
import {CaretRight, List, Star} from "phosphor-react-native";
import {DrawerActions, useNavigation} from "@react-navigation/native";
function Home() {
    const navigation = useNavigation();

    return (
        <VStack backgroundColor={"gray.900"} height={"full"}>

            <BackgroundGradientImage imgSource={gameBackground}/>

            <View justifyContent={"space-between"} height={"full"} px={7} py={10}>
                <HStack justifyContent={"space-between"} >
                    <Button variant={"unstyled"} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <List size={25} color={"white"}/>
                    </Button>

                    <CaretRight size={25} color={"white"}/>
                </HStack>

                <VStack space={2}>
                    <Text color={"white"} fontSize={25}>Valorant</Text>

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

                    <HStack>
                        <Star color={"yellow"} size={30} weight={"fill"}/>
                        <Star color={"yellow"} size={30} weight={"fill"}/>
                        <Star color={"yellow"} size={30} weight={"fill"}/>
                        <Star color={"yellow"} size={30}/>
                        <Star color={"yellow"} size={30}/>
                    </HStack>
                </VStack>
            </View>
        </VStack>
    );
}

export default Home;