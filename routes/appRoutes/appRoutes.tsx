import React, {useEffect} from 'react';
import {useTheme} from "native-base";
import {createDrawerNavigator, DrawerNavigationProp, DrawerScreenProps} from "@react-navigation/drawer";
import Home from "../../screens/home/Home";
import CustomDrawerContent from "./CustomDrawerContent";
import ReviewsContainer from "../../screens/reviews/ReviewsContainer";
import Profile from "../../screens/profile/Profile";
import {GameDto} from "../../@types/games/game.dto";
import {RatingEntity} from "../../@types/user/rating/RatingEntity";
import {RouteProp} from "@react-navigation/native";

export type TAppRoutes = {
    home:  undefined | { rating: RatingEntity, game: GameDto },
    profile: undefined,
    reviews: undefined,
}

export type TAppRoutesProps = DrawerNavigationProp<TAppRoutes>
export type TAppRoutesRouteProps = RouteProp<TAppRoutes>

function AppRoutes() {
    const {Screen, Navigator} = createDrawerNavigator<TAppRoutes>()
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