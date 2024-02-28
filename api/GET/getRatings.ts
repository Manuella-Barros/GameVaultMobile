import {axiosAPI} from "../axios.config";
import {RatingGameDto} from "../../@types/user/rating/TRating";

export async function getRatings(id: string): Promise<RatingGameDto[]>{
    const {data} = await axiosAPI.get(`/ratings/getRatings/${id}`);
    return data;
}