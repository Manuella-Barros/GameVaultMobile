import {Dispatch, ReactNode, SetStateAction} from "react";

export interface IUserCommentContext {
    setIsNextGameLoading:  Dispatch<SetStateAction<boolean>>
    isNextGameLoading: boolean
    setIsCommentLoading: Dispatch<SetStateAction<boolean>>
    isCommentLoading: boolean
    setIsGameRated: Dispatch<SetStateAction<boolean>>
    isGameRated: boolean
    handleSetRating:(a: number) => void
    starsRating: number
}

export interface IUserCommentContextProviderProps {
    children: ReactNode
}