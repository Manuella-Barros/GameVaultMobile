import React, {useContext, useEffect, useState} from 'react';
import AuthRoutes from "./authRoutes/authRoutes";
import AppRoutes from "./appRoutes/appRoutes";
import {NavigationContainer} from "@react-navigation/native";
import {GlobalContext} from "../context/globalContext/GlobalContext";
import Loading from "../components/loading/Loading";

function IndexRoutes() {
    const {userToken, getStorageItems} = useContext(GlobalContext);

    useEffect(() => {
        getStorageItems()
    }, []);

    return (
        <NavigationContainer>
            {userToken ? <AppRoutes/> : <AuthRoutes/>}
        </NavigationContainer>

    );
}

export default IndexRoutes;