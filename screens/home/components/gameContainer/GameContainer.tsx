import React, {useContext, useEffect, useState} from 'react';
import {Divider, HStack, Text, View, VStack, Button as ButtonNativeBase} from "native-base";
import Button from "../../../../components/button/Button";
import {GameDto} from "../../../../@types/games/game.dto";
import {getRandomGame} from "../../../../api/GET/getRandomGame";
import Animated, {useSharedValue} from "react-native-reanimated";
import {Gesture, GestureDetector} from "react-native-gesture-handler";
import {UserCommentContext} from "../../../../context/userCommentContext/UserCommentContext";

interface IGameContainerProps {
    currentGame: GameDto,
    nextGame: () => Promise<void>,
}

function GameContainer({currentGame, nextGame}: IGameContainerProps) {
    const [isInfoLoading, setIsInfoLoading] = useState(false);
    const {isCommentLoading, setIsGameRated, isGameRated, setStarsRating, setIsNextGameLoading} = useContext(UserCommentContext)

    useEffect(() => {
        if(isCommentLoading){
            setIsGameRated(true)
        }
    }, [isCommentLoading]);

    async function handleButton(){
        setIsNextGameLoading(true)
        setIsInfoLoading(true);
        await nextGame()
        setIsInfoLoading(false)
        setIsGameRated(false)
        setStarsRating(1)
        setIsNextGameLoading(false)
    }

    return (
        <VStack space={4} >
            <View display={"block"}>
                <Text color={"white"} fontSize={25}>{currentGame?.name}</Text>
                <Text backgroundColor={"blue.700"} color={"white"} pb={1}>{currentGame?.first_release_date}</Text>

                <Text color={"white"} pb={1} fontStyle={"italic"}>
                    {
                        currentGame.platforms &&
                        currentGame.platforms.map(({name}, index) => {
                            return ` ${name} ${index != (currentGame.platforms.length - 1) ? ' | ' :  ''}`
                        })
                    }
                </Text>
            </View>

            <Divider backgroundColor={"red.800"} height={1} w={'1/6'} borderRadius={2}/>

            <Text color={"white"} numberOfLines={4}>{currentGame.summary}</Text>

            <Button styleType={"variant"}
                    onPress={handleButton}
                    isLoading={isInfoLoading}
                    isDisabled={isCommentLoading}
            >
                {!isGameRated ? "Não joguei" : "Próximo jogo"}
            </Button>

        </VStack>
    );
}

export default GameContainer;