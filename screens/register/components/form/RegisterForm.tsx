import React, {useEffect, useState} from 'react';
import {Text, VStack} from "native-base";
import {FormProvider, useForm} from "react-hook-form";
import Input, {TInputName} from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import {zodResolver} from "@hookform/resolvers/zod";
import {InterfaceInputProps} from "native-base/lib/typescript/components/primitives/Input/types";
import SelectDropDown from "../selectDropDown/SelectDropDown";
import {registerSchema, TRegisterSchema} from "./types";
import {genres, inputInfo} from "./arrays";

function RegisterForm() {
    const {setValue, ...methods} = useForm<TRegisterSchema>({
        resolver: zodResolver(registerSchema),
    })

    function handleRegisterUser(data: TRegisterSchema){
        console.log(data)
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
                                errorMessage={methods.formState.errors.genre1?.message}
                                setSelectedItem={(value)=> setValue('genre1', value)}
                />
                <SelectDropDown label={"2º Gênero Favorito"}
                                data={genres}
                                placeholder={"Escolha um gênero favorito"}
                                errorMessage={methods.formState.errors.genre2?.message}
                                setSelectedItem={(value)=> setValue('genre2', value)}
                />
                {/*<SelectDropDown label={"Jogo Favorito"}*/}
                {/*                data={genres}*/}
                {/*                placeholder={"Escolha seu jogo favorito"}*/}
                {/*                errorMessage={methods.formState.errors.favGame?.message}*/}
                {/*                setSelectedItem={(value)=> setValue('favGame', value)}*/}
                {/*/>*/}

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