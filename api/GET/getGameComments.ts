import {axiosAPI} from "../axios.config";
import {CommentEntity} from "../../@types/user/comment/CommentEntity";
import {IUser} from "../../@types/user/IUser";

export type IGetGameCommentsReturn = CommentEntity & {
    user: Omit<IUser, "email" | "password" | "favGame">
}

export async function getGameComments(gameID: number): Promise<IGetGameCommentsReturn[]>{
    const {data} = await axiosAPI.get(`/comments/getGameComments/${gameID}`)

    return data;
}