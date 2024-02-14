import React, {useContext, useEffect, useState} from "react";
import {HStack, TextArea, useTheme, useToast, View} from "native-base";
import Button from "../../../../components/button/Button";
import {createRating} from "../../../../api/POST/createRating";
import {GlobalContext} from "../../../../context/globalContext/GlobalContext";
import Stars from "../../../../components/stars/Stars";
import {UserCommentContext} from "../../../../context/userCommentContext/UserCommentContext";

interface IUserReviewProps {
    gameID: number,
    nextGame: () => Promise<void>,
}

function UserReview({gameID, nextGame}: IUserReviewProps) {
    const theme = useTheme();
    const [commentText, setCommentText] = useState<string | null>(null);
    const toast = useToast();
    const {userState} = useContext(GlobalContext);
    const {setIsCommentLoading, isCommentLoading, isGameRated, starsRating, setStarsRating, isNextGameLoading} = useContext(UserCommentContext)

    async function handleUserReview(){
        setIsCommentLoading(true)

        if(userState && !isGameRated){
            await createRating({stars: starsRating, userID: userState.id, gameID: gameID }).then(res => console.log(res));
            toast.show({title: "Avaliação realizada", placement: "top", backgroundColor: "green.500"})
        }

        setIsCommentLoading(false)
    }

    return (
        <View my={5} >
            <HStack justifyContent={"center"}>
                {
                    (!isGameRated && !isNextGameLoading) && <Stars setStars={(star) => setStarsRating(star)} stars={starsRating} size={40}/>
                }

                {
                    (isGameRated || isNextGameLoading) && <Stars stars={starsRating} size={40} isStarsInvalid={true}/>
                }
            </HStack>

            <TextArea mt={5}
                      autoCompleteType={undefined}
                      h={20}
                      placeholder={"Deixe um comentário (opcional)"}
                      color={"white"}
                      placeholderTextColor={theme.colors["gray"]["500"]}
                      onChangeText={(value) => setCommentText(value)}
                      padding={5}
                      variant={"unstyled"}
                      backgroundColor={"gray.800"}
                      isDisabled={isCommentLoading || isNextGameLoading}
            />

            <Button onPress={handleUserReview}
                    isLoading={isCommentLoading}
                    isDisabled={isNextGameLoading}
            >Avaliar</Button>
        </View>
    );
}

export default UserReview;