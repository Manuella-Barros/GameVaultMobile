import {TLoginSchema} from "../../@types/user/login/types";
import {axiosAPI} from "../axios.config";
import {IToken} from "../../@types/user/token";

type TLoginUser = IToken & {
        userID: string
}

export async function loginUser(data :TLoginSchema): Promise<TLoginUser>{
    // try {
        const response = await axiosAPI.post("/users/login", data)

        return response.data
    // } catch (e){
    //     console.log(e.message)
    // }
}