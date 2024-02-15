import React from 'react';
import {Center, Text, useTheme, View} from "native-base";
import {createDrawerNavigator, DrawerNavigationProp} from "@react-navigation/drawer";
import Home from "../../screens/home/Home";
import {useNavigation} from "@react-navigation/native";
import CustomDrawerContent from "./CustomDrawerContent";
import {IUser} from "../../@types/user/IUser";
import ReviewsContainer from "../../screens/reviews/ReviewsContainer";
import Profile from "../../screens/profile/Profile";

export type TAppRoutes = {
    home:  undefined
    profile: undefined,
    reviews: undefined,
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
                        },
                    }}
        >
            <Screen name={"home"} component={Home} options={{title: "Home"}}/>
            <Screen name={"reviews"} component={ReviewsContainer} options={{title: "Minhas avaliações"}}/>
            <Screen name={"profile"} component={Profile} options={{title: "Perfil"}}/>
        </Navigator>
    );
}

export default AppRoutes;