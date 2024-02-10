import React from 'react';
import {Center, Text, useTheme, View} from "native-base";
import {createDrawerNavigator, DrawerNavigationProp} from "@react-navigation/drawer";
import Home from "../../screens/home/Home";
import {useNavigation} from "@react-navigation/native";
import CustomDrawerContent from "./CustomDrawerContent";
import {IUser} from "../../@types/user/IUser";

export type TAppRoutes = {
    Home:  undefined
    Perfil: undefined,
    Catalogo: undefined,
}

export type TAppRoutesProps = DrawerNavigationProp<TAppRoutes>

function AppRoutes() {
    const {Screen, Navigator} = createDrawerNavigator<TAppRoutes>();
    const theme = useTheme();

    return (
        <Navigator  drawerContent={(props) => <CustomDrawerContent {...props}/>}
                    screenOptions={{
                        headerShown: false,
                        drawerStyle: {
                            backgroundColor: theme.colors["gray"]["800"],

                        }
                    }}
        >
            <Screen name={"Home"} component={Home}/>
            <Screen name={"Perfil"} component={Home}/>
            <Screen name={"Catalogo"} component={Home}/>
        </Navigator>
    );
}

export default AppRoutes;