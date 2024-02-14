import {axiosAPI} from "./axios.config";

export async function getAllGenres(){
    const {data} = await axiosAPI.get("/games/getAllGenres")

    return data;
}