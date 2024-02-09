import React from 'react';
import {FormControl, Select, WarningOutlineIcon} from "native-base";
import {ISelectDropDownProps} from "./types";



function SelectDropDown({label, placeholder, data, errorMessage, setSelectedItem}: ISelectDropDownProps) {
    return (
        <FormControl my={1} isRequired isInvalid={!!errorMessage}>
            {
                label && <FormControl.Label>{label}</FormControl.Label>
            }

            <Select accessibilityLabel={placeholder}
                    placeholder={placeholder}
                    mt="1"
                    color={"white"}
                    onValueChange={(itemSelectedValue) => setSelectedItem(Number(itemSelectedValue))}
            >
                {
                    data && data.map((d,i) => <Select.Item key={i} label={d.name} value={d.id.toString()} />)
                }

            </Select>

            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>
    );
}

export default SelectDropDown;