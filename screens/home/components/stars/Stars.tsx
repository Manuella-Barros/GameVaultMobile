import React, {useState} from 'react';
import {Star} from "phosphor-react-native";
import {Button, HStack, useTheme} from "native-base";

interface IStarsProps {
    setStars: (a: number) => void,
    stars: number
}

function Stars({setStars, stars}: IStarsProps) {
    const theme = useTheme();
    const starsButton = []

    for(let i = 1; i <= 5; i++){
        starsButton.push(
            <Button onPress={() => setStars(i)} variant={"unstyled"}>
                <Star key={i} color={theme.colors["yellow"]["400"]} size={35} weight={stars >= i ? "fill" : "light"}/>
            </Button>
        )
    }

    return (
        <HStack justifyContent={"center"}>
            {starsButton}
        </HStack>
    );
}

export default Stars;