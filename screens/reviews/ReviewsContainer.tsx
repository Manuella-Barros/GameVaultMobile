import {Button, HStack, ScrollView, Text, View, VStack} from "native-base";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {List, MagnifyingGlass} from "phosphor-react-native";
import React, {useContext, useEffect, useState} from "react";
import Review from "./components/review/Review";
import {RatingGameDto} from "../../@types/user/rating/TRating";
import {getRatings} from "../../api/GET/getRatings";
import {GlobalContext} from "../../context/globalContext/GlobalContext";
import Loading from "../../components/loading/Loading";
import {TAppRoutesProps} from "../../routes/appRoutes/appRoutes";

function ReviewsContainer() {
    const navigation = useNavigation<TAppRoutesProps>();
    const [reviews, setReviews] = useState<RatingGameDto[] | null | undefined>(undefined);
    const {userState} = useContext(GlobalContext);

    useEffect(() => {
        navigation.addListener("focus", () => {
            if(userState)
                getRatings(userState?.id).then((res) => setReviews(res))
        })
    }, []);

    return reviews === undefined
    ? <Loading/>
    : (
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

                    <Text fontSize={30} color={"white"} textAlign={"center"} mb={5}>Minhas avaliações</Text>

                    <VStack space={5}>
                        {
                            reviews && reviews.map(r => <Review key={r.rating.id}
                                                                    game={r.game}
                                                                    rating={r.rating}
                                                            />
                            )
                        }
                    </VStack>
                </View>
            </ScrollView>
        </VStack>
    );
}

export default ReviewsContainer;