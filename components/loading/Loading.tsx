import React from 'react';
import {Center, Heading, HStack, Spinner, Text} from "native-base";

function Loading() {
    return (
        <Center flex={1} backgroundColor={"gray.900"}>
            <HStack space={2} justifyContent="center">
                <Spinner accessibilityLabel="Carregando" size={20}/>
                <Text color="white" fontSize={20}>
                    Carregando...
                </Text>
            </HStack>
        </Center>
    );
}

export default Loading;