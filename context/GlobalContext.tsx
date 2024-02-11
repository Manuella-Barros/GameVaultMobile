import {createContext, useReducer, useState} from "react";
import {IAction, IGlobalContext, IGlobalContextProps, TState} from "./types";
import {IUserEntity} from "../@types/user/IUserEntity";

export const GlobalContext = createContext({} as IGlobalContext)

export const enum ACTION_TYPES {
    "ADD_USER_INFO"
}

function reducer(state: TState, action: IAction) {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    console.log(action.payload)

    switch (action.type){
        case ACTION_TYPES.ADD_USER_INFO:
            if(!state){
                return action.payload;
            }
            return {...state, ...action.payload}
    }
}

export const ContextProvider = ({children}: IGlobalContextProps) => {
    const [userState, dispatch] = useReducer(reducer, null);
    const [userToken, setUserToken] = useState<string | null>(null);

    function handleDispatch(data: IAction){
        dispatch({
            type: data.type,
            payload: data.payload ? data.payload : null
        })
    }

    function handleSetUserToken(token: string){
        setUserToken(token)
    }

    return (
        <GlobalContext.Provider value={{handleSetUserToken, userToken, userState, handleDispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}