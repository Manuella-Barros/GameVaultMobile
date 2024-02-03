import React from 'react';
import {Center, Text, View} from "native-base";
import {createDrawerNavigator, DrawerNavigationProp} from "@react-navigation/drawer";
import Home from "../screens/home/Home";

type TAppRoutes = {
    home: undefined,
}

export type TAppRoutesProps = DrawerNavigationProp<TAppRoutes>

function AppRoutes() {
    const {Screen, Navigator} = createDrawerNavigator<TAppRoutes>();

    return (
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name={"home"} component={Home}/>
        </Navigator>
    );
}

export default AppRoutes;