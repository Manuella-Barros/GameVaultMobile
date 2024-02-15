import {TLoginSchema} from "../../@types/user/login/types";
import {axiosAPI} from "../axios.config";
import {IToken} from "../../@types/user/token";
import {AxiosError, HttpStatusCode} from "axios";
import {ZodError} from "zod";
import axios from "axios/index";

type TLoginUser = IToken & {
        userID: string
}

export async function loginUser(data :TLoginSchema): Promise<TLoginUser>{
    try {
        const response = await axiosAPI.post("/users/login", data)

        return response.data
    } catch (e){
        if(axios.isAxiosError(e))
            throw new Error(e?.response?.data.message)

        throw new Error("Erro interno, tente novamente mais tarde")
    }
}