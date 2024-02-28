import React, {useContext, useEffect, useState} from 'react';
import AuthRoutes from "./authRoutes/authRoutes";
import AppRoutes from "./appRoutes/appRoutes";
import {NavigationContainer} from "@react-navigation/native";
import {GlobalContext} from "../context/globalContext/GlobalContext";
import Loading from "../components/loading/Loading";

function IndexRoutes() {
    const {userToken, userState, getStorageItems} = useContext(GlobalContext);

    useEffect(() => {
        getStorageItems()
    }, []);

    return (
        <NavigationContainer>
            {userToken && userState?.id ? <AppRoutes/> : <AuthRoutes/>}
        </NavigationContainer>

    );
}

export default IndexRoutes;