import Stars from "../stars/Stars";
import React, {useEffect, useRef, useState} from "react";
import {TextArea, useTheme, View} from "native-base";
import Button from "../../../../components/button/Button";

function UserReview() {
    const theme = useTheme();
    const [starsRating, setStarsRating] = useState<number>(1);
    const [commentText, setCommentText] = useState<string | null>(null);

    function handleUserReview(){
        console.log(starsRating)
        console.log(commentText);
    }

    return (
        <View my={5}>
            <Stars setStars={(star) => setStarsRating(star)} stars={starsRating}/>

            <TextArea mt={5}
                      autoCompleteType={undefined}
                      h={20}
                      placeholder={"Deixe um comentário (opcional)"}
                      color={"white"}
                      placeholderTextColor={theme.colors["gray"]["500"]}
                      onChangeText={(value) => setCommentText(value)}
            />

            <Button onPress={handleUserReview}>Avaliar</Button>
        </View>
    );
}

export default UserReview;