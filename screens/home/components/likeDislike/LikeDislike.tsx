import React, {useState} from 'react';
import {Button, HStack} from "native-base";
import {ThumbsDown, ThumbsUp} from "phosphor-react-native";

function LikeDislike() {
    const [feedback, setFeedBack] = useState<null | "like" | "dislike">(null);

    function handleFeedback(type: "like" | "dislike"){
        if(type == feedback){
            setFeedBack(null)
        } else {
            setFeedBack(type)
        }
    }

    return (
        <HStack space={3}>
            <Button variant={"unstyled"} onPress={() => handleFeedback("dislike")}>
                <ThumbsDown size={20} color={feedback == "dislike" ? "red" : "white"}/>
            </Button>

            <Button variant={"unstyled"} onPress={() => handleFeedback("like")}>
                <ThumbsUp size={20} color={feedback == "like" ? "green" : "white"}/>
            </Button>
        </HStack>
    );
}

export default LikeDislike;