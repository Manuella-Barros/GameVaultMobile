import React, {useContext} from 'react';
import AuthRoutes from "./authRoutes/authRoutes";
import AppRoutes from "./appRoutes/appRoutes";
import {NavigationContainer} from "@react-navigation/native";
import {GlobalContext} from "../context/globalContext/GlobalContext";

function IndexRoutes() {
    const {userToken} = useContext(GlobalContext);

    return (
        <NavigationContainer>
            {userToken ? <AppRoutes/> : <AuthRoutes/>}
        </NavigationContainer>

    );
}

export default IndexRoutes;