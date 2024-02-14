import {IGenres} from "../../../../@types/user/register/IGenres";

export interface ISelectDropDownProps {
    label?: null | string,
    placeholder: string,
    data: null | IGenres[],
    errorMessage: null | undefined | string,
    setSelectedItem: (id: string)=> void,
}