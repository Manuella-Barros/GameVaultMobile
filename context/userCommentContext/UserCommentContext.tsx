import {createContext, useState} from "react";
import {IUserCommentContext, IUserCommentContextProviderProps} from "./types";

export const UserCommentContext = createContext({} as IUserCommentContext)

export const UserCommentContextProvider = ({children}: IUserCommentContextProviderProps) => {
    const [isNextGameLoading, setIsNextGameLoading] = useState<boolean>(false);
    const [isCommentLoading, setIsCommentLoading] = useState<boolean>(false);
    const [isGameRated, setIsGameRated] = useState(false);
    const [starsRating, setStarsRating] = useState<number>(1);

    return (
        <UserCommentContext.Provider value={{
            setIsNextGameLoading, isNextGameLoading, setIsCommentLoading, isCommentLoading,
            setIsGameRated, isGameRated, setStarsRating, starsRating
        }}>
            {children}
        </UserCommentContext.Provider>
    )
}