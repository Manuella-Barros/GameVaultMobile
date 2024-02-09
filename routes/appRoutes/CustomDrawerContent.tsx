import React from 'react';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from "@react-navigation/drawer";
import {Gear} from "phosphor-react-native";
import {Button, Divider, HStack, Image, Text, View, VStack} from "native-base";
import userPlaceholder from "../../assets/images/userPlaceholder.jpg"
import ProfileImage from "../../components/profileImage/ProfileImage";

function CustomDrawerContent(props: DrawerContentComponentProps) {
    const {state, navigation} = props;

    return (
        <View flex={1} mx={3} my={6}>
            <HStack space={5} alignItems={"center"} >
                <ProfileImage userProfileImage={userPlaceholder}/>

                <VStack>
                    <Text fontSize={20} color={"white"}>Manu</Text>

                    <HStack space={2}>
                        <Text color={"white"}>FPS</Text>
                        <Divider orientation={"vertical"}/>
                        <Text color={"white"}>Actions Games</Text>
                    </HStack>
                </VStack>
            </HStack>

            <DrawerContentScrollView {...props} style={{marginVertical: 20}}>
                {
                    state.routes.map((route, i) => {
                        return (
                            <DrawerItem label={route.name}
                                onPress={() => navigation.navigate(route.name)}
                                        icon={() => <View marginRight={"-5"} marginLeft={"-3"}><Gear color={"white"}/></View>}
                                labelStyle={{
                                    color: "white",
                                    margin: 0,
                                    fontSize: 16,
                                }}
                            />
                        )
                    })
                }
            </DrawerContentScrollView>

            <Button variant={"unstyled"} justifyContent={"left"} >
                <HStack space={3}>
                    <Gear size={25} color={"white"}/>
                    <Text color={"white"} fontSize={16}>Sair</Text>
                </HStack>
            </Button>
        </View>
    );
}

export default CustomDrawerContent;