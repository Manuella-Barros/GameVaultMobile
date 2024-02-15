import {TLoginSchema} from "../../@types/user/login/types";
import {axiosAPI} from "../axios.config";
import {IToken} from "../../@types/user/token";
import {AxiosError} from "axios";
import {ZodError} from "zod";

type TLoginUser = IToken & {
        userID: string
}

export async function loginUser(data :TLoginSchema): Promise<TLoginUser>{
    try {
        const response = await axiosAPI.post("/users/login", data)

        return response.data
    } catch (e){
        throw new Error(e.response.data.message)
    }
}