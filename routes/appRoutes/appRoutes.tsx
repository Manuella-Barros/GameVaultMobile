import React from 'react';
import {Center, Text, View} from "native-base";
import {createDrawerNavigator, DrawerNavigationProp} from "@react-navigation/drawer";
import Home from "../../screens/home/Home";
import {useNavigation} from "@react-navigation/native";
import CustomDrawerContent from "./CustomDrawerContent";

type TAppRoutes = {
    home: undefined,
}

export type TAppRoutesProps = DrawerNavigationProp<TAppRoutes>

function AppRoutes() {
    const {Screen, Navigator} = createDrawerNavigator<TAppRoutes>();

    return (
        <Navigator  drawerContent={(props) => <CustomDrawerContent {...props}/>}
                    screenOptions={{
                        headerShown: false,
                        drawerStyle: {
                            backgroundColor: "transparent"
                        }
                    }}
        >
            <Screen name={"home"} component={Home}/>
        </Navigator>
        // <Navigator drawerContent={(props) => <CustomDrawerContent {...props}/>}
        //            screenOptions={{
        //                headerShown: false,
        //                drawerStyle:{
        //                    backgroundColor:"transparent",
        //                    flex: 1
        //                    // padding: 10,
        //                    // backgroundColor:"#1D1D1D",
        //                    // display: "flex",
        //                    // justifyContent: "space-between"
        //                },
        //            }}
        // >
        //     <Screen name={"home"} component={Home}/>
        // </Navigator>
    );
}

export default AppRoutes;