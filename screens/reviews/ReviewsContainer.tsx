import {Button, HStack, ScrollView, Text, View, VStack} from "native-base";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {List, MagnifyingGlass} from "phosphor-react-native";
import React from "react";
import Review from "./components/review/Review";

function ReviewsContainer() {
    const navigation = useNavigation();

    return (
        <VStack backgroundColor={"gray.900"} height={"full"}>
            <ScrollView>
                <View height={"full"} mx={7} my={10}>
                    <HStack justifyContent={"space-between"}>
                        <Button variant={"unstyled"} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <List size={25} color={"white"}/>
                        </Button>

                        <Button variant={"unstyled"}>
                            <MagnifyingGlass size={25} color={"white"}/>
                        </Button>
                    </HStack>

                    <Text fontSize={30} color={"white"} textAlign={"center"} mb={5}>Meus jogos avaliados</Text>

                    <VStack space={5}>
                        <Review/>
                        <Review/>
                        <Review/>
                        <Review/>
                        <Review/>
                        <Review/>
                        <Review/>
                        <Review/>
                        <Review/>
                    </VStack>
                </View>
            </ScrollView>
        </VStack>
    );
}

export default ReviewsContainer;