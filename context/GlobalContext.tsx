import {createContext, useEffect, useReducer, useState} from "react";
import {IAction, IGlobalContext, IGlobalContextProps, TState} from "./types";
import {useAsyncStorage} from "@react-native-async-storage/async-storage"
import {getUserByID} from "../api/getUserByID";

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

export const ContextProvider = ({children}: IGlobalContextProps) => {
    const [userState, dispatch] = useReducer(reducer, null);
    const [userToken, setUserToken] = useState<string | null>(null);

    useEffect(() => {
        useAsyncStorage("userToken").getItem().then(res => {
            if(res){
                setUserToken(res)
            }
        })

        useAsyncStorage("userId").getItem().then(res => {
            if(res){
                getUserByID(res).then(res => {
                    handleDispatch({
                        type: ACTION_TYPES.ADD_USER_INFO,
                        payload: {...res}
                    })
                })
            }
        })
    }, []);

    function handleDispatch(data: IAction){
        dispatch({
            type: data.type,
            payload: data.payload ? data.payload : null
        })
    }

    function handleSetUserToken(token: string | null){
        setUserToken(token)
    }

    return (
        <GlobalContext.Provider value={{handleSetUserToken, userToken, userState, handleDispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}