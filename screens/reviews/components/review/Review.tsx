import {HStack, Image, Text, VStack} from "native-base";
import Stars from "../../../../components/stars/Stars";
import {RatingGameDto} from "../../../../@types/user/rating/TRating";

function Review({game, rating}: RatingGameDto) {
    return (
        <HStack height={150} backgroundColor={"gray.800"} borderRadius={10} minHeight={180} space={4} boxSize={"borderBox"}>
            <Image source={{uri: game.cover.url}} alt={"Capa do jogo"} width={"40%"} height={"100%"}/>

            <VStack justifyContent={"space-between"} py={4} flexShrink={1} space={2}>
                <Text color={"white"} fontSize={25}>{game.name}</Text>

                <HStack>
                    <Stars stars={rating.stars} size={25}/>
                </HStack>

                <Text color={"gray.400"}>
                    Avaliado em {new Date(rating.updatedAt).toLocaleDateString("pt-BR")}
                </Text>
            </VStack>
        </HStack>
    );
}

export default Review;