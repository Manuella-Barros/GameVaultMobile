import {TRating} from "../../@types/user/rating/TRating";
import {RatingEntity} from "../../@types/user/rating/RatingEntity";
import {axiosAPI} from "../axios.config";

export async function createRating(data: TRating): Promise<RatingEntity>{
    const response = await axiosAPI.post("/users/createRating", data);

    return response.data;
}