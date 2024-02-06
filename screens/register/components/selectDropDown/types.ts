import {IGenres} from "../form/types";

export interface ISelectDropDownProps {
    label?: null | string,
    placeholder: string,
    data: null | IGenres[],
    errorMessage: null | undefined | string,
    setSelectedItem: (id: number)=> void,
}