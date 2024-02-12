import React, {useState} from 'react';
import {Divider, HStack, Text, View, VStack, Button as ButtonNativeBase} from "native-base";
import Button from "../../../../components/button/Button";
import Stars from "../stars/Stars";
import {GameDto} from "../../../../@types/games/game.dto";
import {getRandomGame} from "../../../../api/getRandomGame";

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
        <VStack space={4}>
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
            {
                currentGame?.storyline && <Text color={"white"}>{currentGame.storyline}</Text>
            }

            <Button styleType={"variant"} onPress={nextGame} isLoading={isInfoLoading}>Não Joguei</Button>
            <Stars/>
        </VStack>
    );
}

export default GameContainer;