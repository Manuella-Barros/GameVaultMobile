import {VStack, ScrollView, HStack, View, Button} from "native-base";
import BackgroundGradientImage from "../../components/backgroundGradientImage/BackgroundGradientImage";
import React, {useCallback, useContext, useEffect, useState} from "react";
import {getRandomGame} from "../../api/GET/getRandomGame";
import {GameDto} from "../../@types/games/game.dto";
import GameContainer from "./components/gameContainer/GameContainer";
import CommentsContainer from "./components/commentsContainer/CommentsContainer";
import {DrawerActions, useFocusEffect, useNavigation, useRoute} from "@react-navigation/native";
import {List, MagnifyingGlass} from "phosphor-react-native";
import {TAppRoutesProps, TAppRoutesRouteProps} from "../../routes/appRoutes/appRoutes";
import UserReview from "./components/userReview/UserReview";
import {UserCommentContext, UserCommentContextProvider} from "../../context/userCommentContext/UserCommentContext";
import Loading from "../../components/loading/Loading";
import {GlobalContext} from "../../context/globalContext/GlobalContext";


function Home() {
    const navigation = useNavigation<TAppRoutesProps>();
    const route = useRoute<TAppRoutesRouteProps>();
    const [currentGame, setCurrentGame] = useState<GameDto>();
    const {setIsGameRated, handleSetRating} = useContext(UserCommentContext)

    // useEffect(() => {
    //     navigation.addListener("focus", () => {
    //         console.log("tem rota? = " + route.params)
    //
    //         if(route.params){
    //             setCurrentGame(route.params.game)
    //             setIsGameRated(true)
    //             setStarsRating(route.params.rating.stars)
    //         } else {
    //             console.log("ta caindo aqui pq o cacete")
    //             nextGame()
    //         }
    //     })
    // }, []);

    // useFocusEffect(useCallback(()=>{
    //     console.log(route)
    //
    //     if(route.params){
    //         setCurrentGame(route.params.game)
    //         setIsGameRated(true)
    //         setStarsRating(route.params.rating.stars)
    //     } else {
    //         console.log("ta caindo aqui pq o cacete")
    //         nextGame()
    //     }
    // }, [route]))

    useEffect(() => {
            console.log("tem rota? = " + route.params)

            if(route.params){
                setCurrentGame(route.params.game)
                handleSetRating(route.params.rating.stars)
            } else {
                console.log("ta caindo aqui pq o cacete")
                nextGame()
            }
    }, [route.params]);

    async function nextGame(){
        const game = await getRandomGame()
        setCurrentGame(game)
    }

    return !currentGame
    ? <Loading/>
    : (
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
    );
}

export default Home;
