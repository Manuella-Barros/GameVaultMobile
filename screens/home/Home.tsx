import {VStack, ScrollView, HStack, View, Button} from "native-base";
import BackgroundGradientImage from "../../components/backgroundGradientImage/BackgroundGradientImage";
import React, {useEffect, useState} from "react";
import {getRandomGame} from "../../api/getRandomGame";
import {GameDto} from "../../@types/games/game.dto";
import GameContainer from "./components/gameContainer/GameContainer";
import CommentsContainer from "./components/commentsContainer/CommentsContainer";
import {DrawerActions, RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {List, MagnifyingGlass} from "phosphor-react-native";
import {TAppRoutes, TAppRoutesProps} from "../../routes/appRoutes/appRoutes";
import Stars from "./components/stars/Stars";
import UserReview from "./components/userReview/UserReview";
function Home() {
    const navigation = useNavigation<TAppRoutesProps>();
    const [currentGame, setCurrentGame] = useState<GameDto>()

    useEffect(() => {
        getRandomGame().then(res => setCurrentGame(res))
    }, []);


    if(!currentGame)
        return <></>

    return (
        <VStack backgroundColor={"gray.900"} height={"full"}>
        <ScrollView>
            {
                currentGame?.cover && <BackgroundGradientImage imgSource={{uri: currentGame?.cover.url}}/>
            }

            <View height={"full"} mx={7} my={10}>
                <HStack justifyContent={"space-between"} mb={200} >
                    <Button variant={"unstyled"} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <List size={25} color={"white"}/>
                    </Button>

                    <Button variant={"unstyled"}>
                        <MagnifyingGlass size={25} color={"white"}/>
                    </Button>
                </HStack>

                <GameContainer currentGame={currentGame} setGame={(res) => setCurrentGame(res)}/>
                <UserReview/>
                <CommentsContainer/>
            </View>
        </ScrollView>
        </VStack>
    );
}

export default Home;
