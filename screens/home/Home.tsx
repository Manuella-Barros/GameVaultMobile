import {VStack, ScrollView, HStack, View, Button} from "native-base";
import BackgroundGradientImage from "../../components/backgroundGradientImage/BackgroundGradientImage";
import React, {useContext, useEffect, useState} from "react";
import {getRandomGame} from "../../api/GET/getRandomGame";
import {GameDto} from "../../@types/games/game.dto";
import GameContainer from "./components/gameContainer/GameContainer";
import CommentsContainer from "./components/commentsContainer/CommentsContainer";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {List, MagnifyingGlass} from "phosphor-react-native";
import {TAppRoutesProps} from "../../routes/appRoutes/appRoutes";
import UserReview from "./components/userReview/UserReview";
import {UserCommentContextProvider} from "../../context/userCommentContext/UserCommentContext";
import Loading from "../../components/loading/Loading";
import {GlobalContext} from "../../context/globalContext/GlobalContext";

function Home() {
    const navigation = useNavigation<TAppRoutesProps>();
    const [currentGame, setCurrentGame] = useState<GameDto>();

    useEffect(() => {
        nextGame()
    }, []);

    async function nextGame(){
        const game = await getRandomGame()
        setCurrentGame(game)
    }

    return !currentGame
    ? <Loading/>
    : (
        <UserCommentContextProvider>
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

                <GameContainer currentGame={currentGame} nextGame={() => nextGame()}/>

                <UserReview gameID={currentGame.id} nextGame={() => nextGame()}/>

                <CommentsContainer gameID={currentGame.id}/>
            </View>
        </ScrollView>
        </VStack>
        </UserCommentContextProvider>
    );
}

export default Home;
