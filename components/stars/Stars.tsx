import React, {useState} from 'react';
import {Star} from "phosphor-react-native";
import {Button, HStack, useTheme} from "native-base";

interface IStarsProps {
    setStars?: (a: number) => void
    stars: number
    size: number
    isStarsInvalid?: boolean
}

function Stars({setStars, stars, size, isStarsInvalid}: IStarsProps) {
    const theme = useTheme();
    const starsButton = []

    for(let i = 1; i <= 5; i++){
        starsButton.push(
            <Button variant={"unstyled"}
                    padding={1}
                    onPress={() => !setStars ? null : setStars(i)}
                    isDisabled={isStarsInvalid}
            >
                <Star key={i} color={theme.colors["yellow"]["400"]} size={size} weight={stars >= i ? "fill" : "light"}/>
            </Button>
        )
    }

    return (
        starsButton
    );
}

export default Stars;