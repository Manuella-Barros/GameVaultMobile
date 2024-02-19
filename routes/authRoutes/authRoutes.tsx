import React, {useEffect} from 'react';
import {
    createNativeStackNavigator,
    NativeStackNavigationProp, NativeStackScreenProps,
} from "@react-navigation/native-stack"
import Login from "../../screens/login/Login";
import Register from "../../screens/register/Register";

type TAuthRoutes = {
    login: undefined
    register: undefined
    loading: undefined
}

export type TAuthRoutesProps = NativeStackNavigationProp<TAuthRoutes>

function AuthRoutes() {
    const {Screen, Navigator} = createNativeStackNavigator<TAuthRoutes>();

    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name={"login"} component={Login}/>
            <Screen name={"register"} component={Register}/>
            <Screen name={"loading"} component={Login}/>
        </Navigator>
    );
}

export default AuthRoutes;