import React, {useState} from 'react';
import {Divider, HStack, Text, View, VStack, Button as ButtonNativeBase} from "native-base";
import Button from "../../../../components/button/Button";
import {GameDto} from "../../../../@types/games/game.dto";
import {getRandomGame} from "../../../../api/getRandomGame";
import Animated, {useSharedValue} from "react-native-reanimated";
import {Gesture, GestureDetector} from "react-native-gesture-handler";

interface IGameContainerProps {
    currentGame: GameDto,
    setGame: (a: GameDto) => void,
}

function GameContainer({currentGame, setGame}: IGameContainerProps) {
    const [isInfoLoading, setIsInfoLoading] = useState(false);

    function nextGame(){
        setIsInfoLoading(true);

        getRandomGame().then(res => {
            setGame(res);
            setIsInfoLoading(false)
        })
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

            <Divider backgroundColor={"red.800"} height={1} borderRadius={2}/>

            <Text color={"white"}>{currentGame.summary}</Text>

            <Button styleType={"variant"} onPress={nextGame} isLoading={isInfoLoading}>Não Joguei</Button>

        </VStack>
    );
}

export default GameContainer;