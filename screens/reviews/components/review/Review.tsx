import {HStack, Image, Text, VStack} from "native-base";
import game from "../../../../assets/images/gameBackground-1.jpg"
import Stars from "../stars/Stars";

function Review() {
    return (
        <HStack height={150} backgroundColor={"gray.800"} borderRadius={10}>
            <Image source={game} alt={"Capa do jogo"} width={"40%"} height={"100%"}/>

            <VStack justifyContent={"space-between"} p={4}>
                <Text color={"white"} fontSize={25}>
                    Valorant
                </Text>

                <Stars rating={3}/>

                <Text color={"gray.400"}>
                    Avaliado em 11/02/2024
                </Text>
            </VStack>
        </HStack>
    );
}

export default Review;