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

interface ICustomDrawerContentProps {
    props: DrawerContentComponentProps
}

function CustomDrawerContent(props) {
    return (
        <View>
            <HStack>
                <Image source={userPlaceholder} width={40}/>

                <VStack>
                    <Text>Manu</Text>

                    <HStack>
                        <Text>FPS</Text>
                        <Divider orientation={"vertical"}/>
                        <Text>Actions Games</Text>
                    </HStack>
                </VStack>
            </HStack>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Sair"
                    onPress={() => console.log("Por uma função aqui") }
                    icon={() => <Gear/>}
                />
            </DrawerContentScrollView>
        </View>
    );
}

export default CustomDrawerContent;