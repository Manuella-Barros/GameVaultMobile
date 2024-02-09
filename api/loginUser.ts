import {TLoginSchema} from "../@types/user/login/types";
import {axiosAPI} from "./axios.config";
import {AxiosError} from "axios";
export async function loginUser(data :TLoginSchema){
    try {
        const response = await axiosAPI.post("/users/login", data)

        return response.data
    } catch (e){
        console.log(e.message)
    }
}