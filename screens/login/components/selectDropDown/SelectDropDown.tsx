import React, {useEffect, useState} from 'react';
import {FormControl, Select, WarningOutlineIcon} from "native-base";

interface ISelectDropDownProps<T> {
    label?: null | string,
    placeholder: string,
    data: null | string[],
    errorMessage: string,
    selectedItem: null | T,
    setSelectedItem:  React.Dispatch<React.SetStateAction<null | T>>,
}

function SelectDropDown<T>({label, placeholder, data, errorMessage, selectedItem, setSelectedItem}: ISelectDropDownProps<T>) {

    return (
        <FormControl isRequired isInvalid={!selectedItem} my={1}>
            {
                label && <FormControl.Label>{label}</FormControl.Label>
            }


            <Select accessibilityLabel={placeholder}
                    placeholder={placeholder}
                    mt="1"
                    color={"white"}
                    onValueChange={(itemSelectedValue: T) => setSelectedItem(itemSelectedValue)}
            >
                {
                    data && data.map((d) => <Select.Item label={d as string} value={d as string} />)
                }

            </Select>

            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>
    );
}

export default SelectDropDown;