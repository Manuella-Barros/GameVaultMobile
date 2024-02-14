import Stars from "../stars/Stars";
import React, {useContext, useEffect, useState} from "react";
import {TextArea, useTheme, useToast, View} from "native-base";
import Button from "../../../../components/button/Button";
import {createRating} from "../../../../api/POST/createRating";
import {GlobalContext} from "../../../../context/GlobalContext";
import {GameDto} from "../../../../@types/games/game.dto";
import {getRandomGame} from "../../../../api/GET/getRandomGame";

interface IUserReviewProps {
    gameID: number,
    setGame: (a: GameDto) => void,
}

function UserReview({gameID, setGame}: IUserReviewProps) {
    const theme = useTheme();
    const [starsRating, setStarsRating] = useState<number>(1);
    const [commentText, setCommentText] = useState<string | null>(null);
    const [isInfoLoading, setIsInfoLoading] = useState<boolean>(false);
    const toast = useToast();
    const {userState} = useContext(GlobalContext);

    function handleUserReview(){

        if(userState){
            setIsInfoLoading(true)

            createRating({stars: starsRating, userID: userState.id, gameID: gameID }).then(res => {
                toast.show({title: "Avaliação realizada", placement: "top", backgroundColor: "green.500"})
                setStarsRating(1);
                nextGame().then(r => setIsInfoLoading(false));
            })
        }

    }

    async function nextGame(){
        getRandomGame().then(res => { setGame(res) })
    }

    return (
        <View my={5} >
            <Stars setStars={(star) => setStarsRating(star)} stars={starsRating}/>

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
            />

            <Button onPress={handleUserReview}
                    isLoading={isInfoLoading}
            >Avaliar</Button>
        </View>
    );
}

export default UserReview;