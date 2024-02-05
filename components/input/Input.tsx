import React from 'react';
import {Box, FormControl, Input as InputNativeBase, Text, WarningOutlineIcon} from "native-base"
import {FieldErrors, useController} from "react-hook-form";
import {InterfaceInputProps} from "native-base/lib/typescript/components/primitives/Input/types";

interface IInput extends InterfaceInputProps{
    label: string,
    placeholder: string,
    name: TInputName,
    errors: FieldErrors,
}

export type TInputName = "email" | "senha" | "confirmacaoSenha";

function Input({label, placeholder, name, errors, ...props}: IInput) {
    const {field} = useController({
        name,
    });

    return (
        <FormControl my={2} isInvalid={!!errors[name]}>
            <FormControl.Label>
                <Text
                    fontSize={16}
                    color={"white"}
                >{label}</Text>
            </FormControl.Label>

            <InputNativeBase
                placeholder={placeholder}
                backgroundColor={"gray.700"}
                color={"white"}
                borderColor={"gray.700"}
                _focus={{
                    backgroundColor: "gray.600",
                    borderWidth: 1,
                    borderColor: "white"
                }}

                onChangeText={field.onChange} // send value to hook form

                {...props}
            />

            {
                errors[name] &&
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    {errors[name]?.message}
                </FormControl.ErrorMessage>
            }

        </FormControl>
    );
}

export default Input;