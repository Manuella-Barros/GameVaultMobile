import React from 'react';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from "@react-navigation/drawer";
import {Gear} from "phosphor-react-native";
import {Divider, HStack, Image, Text, View, VStack} from "native-base";
import userPlaceholder from "../../assets/images/userPlaceholder.jpg"
import ProfileImage from "../../components/profileImage/ProfileImage";

interface ICustomDrawerContentProps {
    props: DrawerContentComponentProps
}

function CustomDrawerContent(props) {
    return (
        <View flex={1}>
            <View backgroundColor={"white"}>
                <ProfileImage userProfileImage={userPlaceholder}/>

            </View>

            <DrawerContentScrollView {...props} style={{
                backgroundColor: "white",
            }}>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>

            <View>
                <Text>Sair</Text>
            </View>
        </View>

        // <View flex={1}
        //       p={5}
        //       backgroundColor={"#1D1D1D"}
        //       display={"flex"}
        //       justifyContent={"space-between"}
        // >
        // <DrawerContentScrollView {...props}>
        //     <HStack space={5} alignItems={"center"}>
        //         <ProfileImage userProfileImage={userPlaceholder}/>
        //
        //         <VStack>
        //             <Text fontSize={20} color={"white"}>Manu</Text>
        //
        //             <HStack space={2}>
        //                 <Text color={"white"}>FPS</Text>
        //                 <Divider orientation={"vertical"}/>
        //                 <Text color={"white"}>Actions Games</Text>
        //             </HStack>
        //         </VStack>
        //     </HStack>
        //
        //     <VStack>
        //         <DrawerItemList {...props} />
        //         <DrawerItem
        //             label="Sair"
        //             onPress={() => console.log("Por uma função aqui")}
        //             icon={() => <Gear/>}
        //         />
        //     </VStack>
        //
        // </DrawerContentScrollView>
        // </View>
    );
}

export default CustomDrawerContent;