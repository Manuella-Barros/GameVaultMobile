import {axiosAPI} from "../axios.config";

export async function getRandomGame(){
    const {data} = await axiosAPI.get("/games/getRandomGame");
    return data;
}