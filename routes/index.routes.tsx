import React from 'react';
import AuthRoutes from "./authRoutes/authRoutes";
import AppRoutes from "./appRoutes/appRoutes";
import {NavigationContainer} from "@react-navigation/native";

function IndexRoutes() {
    const user = undefined

    return (
        <NavigationContainer>
            {!user ? <AppRoutes/> : <AuthRoutes/>}
        </NavigationContainer>

    );
}

export default IndexRoutes;