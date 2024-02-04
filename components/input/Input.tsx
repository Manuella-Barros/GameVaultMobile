import React from 'react';
import {Box, FormControl, Input as InputNativeBase, Text} from "native-base"
import {useController} from "react-hook-form";
import {InterfaceInputProps} from "native-base/lib/typescript/components/primitives/Input/types";

interface IInput extends InterfaceInputProps{
    label: string,
    placeholder: string,
    name: TInputName,
}

export type TInputName = "email" | "senha" | "confirmacaoSenha";

function Input({label, placeholder, name, ...props}: IInput) {
    const {field} = useController({
        name,
    });

    return (
        <Box my={2}>
            <FormControl.Label>
                <Text
                    fontSize={16}
                    color={"white"}
                >{label}</Text>
            </FormControl.Label>

            <InputNativeBase
                placeholder={placeholder}
                variant={"unstyled"}
                backgroundColor={"gray.700"}
                color={"white"}
                _focus={{
                    backgroundColor: "gray.600",
                    borderWidth: 1,
                    borderColor: "white"
                }}

                onChangeText={field.onChange} // send value to hook form

                {...props}
            />
        </Box>
    );
}

export default Input;