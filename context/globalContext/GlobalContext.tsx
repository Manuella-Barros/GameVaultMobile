import {createContext, useEffect, useReducer, useState} from "react";
import {IAction, IGlobalContext, IGlobalContextProps, TState} from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage"
import {getUserByID} from "../../api/GET/getUserByID";

export const GlobalContext = createContext({} as IGlobalContext)

export const enum ACTION_TYPES {
    "ADD_USER_INFO",
    "LOGOUT",
}

function reducer(state: TState, action: IAction) {
    switch (action.type){
        case ACTION_TYPES.ADD_USER_INFO:
            if(!state){
                return action.payload;
            }
            return {...state, ...action.payload}

        case ACTION_TYPES.LOGOUT:
            return null;
    }
}

export const GlobalContextProvider = ({children}: IGlobalContextProps) => {
    const [userState, dispatch] = useReducer(reducer, null);
    const [userToken, setUserToken] = useState<string | null>(null);

    useEffect(() => {
        getStorageItems()
    }, []);

    function handleDispatch(data: IAction){
        dispatch({
            type: data.type,
            payload: data.payload ? data.payload : null
        })
    }

    async function handleSetUserToken(token: string | null){
        setUserToken(token);

        if(token)
            await AsyncStorage.setItem("userToken", token)
        else
            await AsyncStorage.removeItem("userToken")
    }

    async function storageUserID(id: string | null){
        if(id)
            await AsyncStorage.setItem("userID", id)
        else
            await AsyncStorage.removeItem("userID")
        }

    function getStorageItems(){
        AsyncStorage.getItem("userID")
            .then(res => {
                if(res){
                    setUserToken(res)
                }
            })

        AsyncStorage.getItem("userId")
            .then(res => {
                if(res){
                    getUserByID(res).then(res => {
                        handleDispatch({
                            type: ACTION_TYPES.ADD_USER_INFO,
                            payload: {...res}
                        })
                    })
                }
            })
    }

    return (
        <GlobalContext.Provider value={{storageUserID, userState, handleDispatch, userToken, handleSetUserToken}}>
            {children}
        </GlobalContext.Provider>
    )
}