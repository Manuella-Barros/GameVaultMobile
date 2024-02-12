import React, {useState} from 'react';
import {Star} from "phosphor-react-native";
import {Button, HStack, useTheme} from "native-base";

interface IStarsProps {
    rating: number
}

function Stars({rating}: IStarsProps) {
    const theme = useTheme();
    const stars = []

    for(let i = 1; i <= 5; i++){
        stars.push(
            <Star key={i} color={theme.colors["yellow"]["400"]} size={25} weight={rating >= i ? "fill" : "light"}/>
        )
    }

    return (
        <HStack>
            {stars}
        </HStack>
    );
}

export default Stars;