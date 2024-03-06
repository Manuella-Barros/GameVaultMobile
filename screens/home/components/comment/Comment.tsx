import React from 'react';
import {Divider, HStack, Text, View, VStack} from "native-base";
import ProfileImage from "../../../../components/profileImage/ProfileImage";
import userPlaceholder from "../../../../assets/images/userPlaceholder.jpg"
import LikeDislike from "../likeDislike/LikeDislike";
import {IGetGameCommentsReturn} from "../../../../api/GET/getGameComments";

function Comment(props: IGetGameCommentsReturn) {
    return (
        <HStack space={2}>
            <View mt={1}>
                <ProfileImage userProfileImage={userPlaceholder} />
            </View>

            <View flexWrap={"wrap"} width={"80%"} >
                <Text color={"white"} fontSize={16}>{props.user.name}</Text>
                <Text color={"white"} py={1}>{props.text}</Text>

                <HStack justifyContent={"space-between"} width={"100%"}alignItems={"center"}>
                    <HStack space={2} >
                        <Text color={"gray.300"} fontSize={13} fontStyle={"italic"}>{props.user.favGenre1}</Text>
                        <Divider orientation={"vertical"} h={5} color={"white"} backgroundColor={"white"}/>
                        <Text color={"gray.300"} fontSize={13} fontStyle={"italic"}>{props.user.favGenre2}</Text>
                    </HStack>

                {/*<LikeDislike/>*/}
                </HStack>
            </View>
        </HStack>
    );
}

export default Comment;