import React, {useEffect, useState} from 'react';
import {Text, VStack} from "native-base";
import {FormProvider, useForm} from "react-hook-form";
import Input, {TInputName} from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import {zodResolver} from "@hookform/resolvers/zod";
import {InterfaceInputProps} from "native-base/lib/typescript/components/primitives/Input/types";
import SelectDropDown from "../selectDropDown/SelectDropDown";
import {registerSchema, TRegisterSchema} from "../../../../@types/user/register/registerSchema";
import {genres, inputInfo} from "./arrays";
import {createUser} from "../../../../api/createUser";

function RegisterForm() {
    const {setValue, ...methods} = useForm<TRegisterSchema>({
        resolver: zodResolver(registerSchema),
    })

    function handleRegisterUser(data: TRegisterSchema){
        const {passwordConfirmation, ...userInfo} = data;
        createUser(userInfo).then(res => console.log(res))
    }

    useEffect(() => {
        console.log(methods.formState.errors)
    }, [methods.formState.errors])

    return (
        <VStack m={10}>
            <Text
                color={"white"}
                fontSize={"2xl"}
                textAlign={"center"}
                fontWeight={500}
            >Junte-se à nossa comunidade!</Text>

            <FormProvider {...{...methods, setValue}}>

                {
                    inputInfo.map((item)=> {
                        return <Input placeholder={item.placeholder}
                                      key={item.name}
                                      label={item.label}
                                      name={item.name as TInputName}
                                      type={item?.type as InterfaceInputProps["type"]}
                                      errors={methods.formState.errors}/>
                    })
                }

                <SelectDropDown label={"1º Gênero Favorito"}
                                data={genres}
                                placeholder={"Escolha um gênero favorito"}
                                errorMessage={methods.formState.errors.favGenre1?.message}
                                setSelectedItem={(value)=> setValue('favGenre1', value)}
                />
                <SelectDropDown label={"2º Gênero Favorito"}
                                data={genres}
                                placeholder={"Escolha um gênero favorito"}
                                errorMessage={methods.formState.errors.favGenre2?.message}
                                setSelectedItem={(value)=> setValue('favGenre2', value)}
                />

                <Button onPress={methods.handleSubmit(handleRegisterUser)}
                >Registrar</Button>
            </FormProvider>
        </VStack>
    );
}

export default RegisterForm;

// <FlatList
//     data={inputInfo}
//     renderItem={({item}) => {
//         return <Input placeholder={item.placeholder}
//                       label={item.label}
//                       name={item.name as TInputName}
//                       type={item?.type as InterfaceInputProps["type"]}
//                       errors={methods.formState.errors}
//         />
//     }}
// />