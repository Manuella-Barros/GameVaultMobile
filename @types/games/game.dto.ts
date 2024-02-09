export interface GameDto {
    id: string,
    cover: ICover,
    name: string,
    first_release_date: string,
    genres: IIdName[],
    platforms: IIdName[],
    storyline: string
    summary?: string,
}

interface ICover {
    id: string,
    url: string
}

interface IIdName {
    id: string,
    name: string
}