import {ReactNode} from "react";
import {IUserEntity} from "../../@types/user/IUserEntity";
import {ACTION_TYPES} from "./GlobalContext";

export interface IGlobalContextProps {
    children: ReactNode
}

export interface IGlobalContext {
    handleSetUserToken: (token: string | null) => Promise<void>,
    userToken: string | null,
    userState: IUserEntity| null,
    handleDispatch: (data: IAction) => void,
    storageUserID: (id: string | null) => Promise<void>
    getStorageItems: () => Promise<void>
}

export interface IAction {
    type: ACTION_TYPES,
    payload?: any
}

export type TState = IUserEntity | null;