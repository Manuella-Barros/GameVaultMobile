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


    function handleDispatch(data: IAction){
        dispatch({
            type: data.type,
            payload: data.payload ? data.payload : null
        })
    }

    async function handleSetUserToken(token: string | null): Promise<void>{
        setUserToken(token);

        if(token)
            await AsyncStorage.setItem("userToken", token)
        else
            await AsyncStorage.removeItem("userToken")
    }

    async function storageUserID(id: string | null): Promise<void>{
        if(id)
            await AsyncStorage.setItem("userID", id)
        else
            await AsyncStorage.removeItem("userID")
    }

    async function getStorageItems(): Promise<void>{
        const token = await AsyncStorage.getItem("userToken")

        if(token)
            setUserToken(token)

        const id = await AsyncStorage.getItem("userID")

        if(id){
            getUserByID(id).then(res => {
                                handleDispatch({
                                    type: ACTION_TYPES.ADD_USER_INFO,
                                    payload: {...res}
                                })
                            })
        }
    }

    return (
        <GlobalContext.Provider value={{storageUserID, userState, handleDispatch, userToken, handleSetUserToken, getStorageItems}}>
            {children}
        </GlobalContext.Provider>
    )
}