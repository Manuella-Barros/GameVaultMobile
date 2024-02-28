import {axiosAPI} from "../axios.config";
import {IComment} from "../../@types/user/comment/IComment";
import {CommentEntity} from "../../@types/user/comment/CommentEntity";

export async function createComment(data: IComment): Promise<CommentEntity>{
    const response = await axiosAPI.post("/comments/createComment", data);

    return response.data;
}