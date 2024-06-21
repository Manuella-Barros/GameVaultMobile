import { HStack, Image, Pressable, Text, View, VStack} from "native-base";
import Stars from "../../../../components/stars/Stars";
import {RatingGameDto} from "../../../../@types/user/rating/TRating";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {TAppRoutesProps} from "../../../../routes/appRoutes/appRoutes";

function Review({game, rating}: RatingGameDto) {
    const navigation = useNavigation<TAppRoutesProps>();
    console.log(game)

    return (
            <Pressable onPress={() => navigation.navigate("home", {
                game,
                rating
            })}>
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
            </Pressable>
    );
}

export default Review;