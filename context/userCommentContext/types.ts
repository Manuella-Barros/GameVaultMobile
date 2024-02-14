import {Dispatch, ReactNode, SetStateAction} from "react";

export interface IUserCommentContext {
    setIsNextGameLoading:  Dispatch<SetStateAction<boolean>>
    isNextGameLoading: boolean
    setIsCommentLoading: Dispatch<SetStateAction<boolean>>
    isCommentLoading: boolean
    setIsGameRated: Dispatch<SetStateAction<boolean>>
    isGameRated: boolean
    setStarsRating: Dispatch<SetStateAction<number>>
    starsRating: number
}

export interface IUserCommentContextProviderProps {
    children: ReactNode
}