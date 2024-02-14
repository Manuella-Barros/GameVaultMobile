import {axiosAPI} from "../axios.config";
import {IUserEntity} from "../../@types/user/IUserEntity";

export async function getUserByID(id: string): Promise<IUserEntity>{
    const response = await axiosAPI.get(`/users/getUserByID/${id}`)

    return response.data

}