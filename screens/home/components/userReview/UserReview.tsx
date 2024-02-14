import Stars from "../stars/Stars";
import React, {useState} from "react";
import {TextArea, useTheme, useToast, View} from "native-base";
import Button from "../../../../components/button/Button";

function UserReview() {
    const theme = useTheme();
    const [starsRating, setStarsRating] = useState<number>(1);
    const [commentText, setCommentText] = useState<string | null>(null);
    const toast = useToast();

    function handleUserReview(){
        toast.show({title: "Avaliação realizada", placement: "top", backgroundColor: "green.500"})

        console.log(starsRating)
        console.log(commentText);
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

            <Button onPress={handleUserReview}>Avaliar</Button>
        </View>
    );
}

export default UserReview;