import {axiosAPI} from "./axios.config";
import {IUser} from "../@types/user/IUser";
import {IUserEntity} from "../@types/user/IUserEntity";

export async function createUser(data: IUser): Promise<IUserEntity | undefined> {
    try {
        const response = await axiosAPI.post("/users/create", data)
        const user = response.data

        return user
    } catch (e){
        console.log(e)
    }
}