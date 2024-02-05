import React, {useEffect, useState} from 'react';
import {FlatList, Text, VStack} from "native-base";
import {FormProvider, useForm} from "react-hook-form";
import Input, {TInputName} from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {InterfaceInputProps} from "native-base/lib/typescript/components/primitives/Input/types";
import SelectDropDown from "../selectDropDown/SelectDropDown";

const inputInfo = [
    {
        label: "Email",
        placeholder: "exemplo@gmail.com",
        name: "email"
    },
    {
        label: "Senha",
        placeholder: "******",
        name: "senha",
        type: "password",
    },
    {
        label: "Confirme sua senha",
        placeholder: "******",
        name: "confirmacaoSenha",
        type: "password",
    },
]

const registerSchema = z.object({
    email:
        z.string()
        .email({message: "Email inválido"}),
    senha:
        z.string()
        .min(3, {message: "Mínimo 3 caracteres"})
        .max(18, {message: "Máximo 18 caracteres"}),
    confirmacaoSenha:
        z.string()
        .min(3, {message: "Mínimo 3 caracteres"})
        .max(18, {message: "Máximo 18 caracteres"}),
}).refine((fields) => {
    return fields.senha == fields.confirmacaoSenha
}, {
    message: "As senhas devem ser iguais",
    path: ["confirmacaoSenha"],
})

type TRegisterSchema = z.infer<typeof registerSchema>;

const genres = ["Rpg", "Fps"];
export type TGenres = typeof genres;

function RegisterForm() {
    const methods = useForm<TRegisterSchema>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: '',
            senha: '',
            confirmacaoSenha: '',
        }
    })
    const [genero1, setGenero1] = useState<null | TGenres>(null);
    const [genero2, setGenero2] = useState<null | TGenres>(null);

    function handleRegisterUser(data: TRegisterSchema){
        if(genero1 && genero2 && (genero1 != genero2)){
            console.log(genero1)
            console.log(genero2)
            console.log(data)
        }
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

            <FormProvider {...methods}>
                <FlatList
                    data={inputInfo}
                    renderItem={({item}) => {
                        return <Input placeholder={item.placeholder}
                                      label={item.label}
                                      name={item.name as TInputName}
                                      type={item?.type as InterfaceInputProps["type"]}
                                      errors={methods.formState.errors}
                        />
                    }}
                />

                <SelectDropDown<TGenres>
                                label={"1º Gênero Favorito"}
                                data={genres}
                                placeholder={"Escolha um gênero favorito"}
                                errorMessage={"Selecione um gênero!"}
                                selectedItem={genero1}
                                setSelectedItem={setGenero1}
                />
                <SelectDropDown<TGenres>
                                label={"2º Gênero Favorito"}
                                data={genres}
                                placeholder={"Escolha um gênero favorito"}
                                errorMessage={"Selecione um gênero!"}
                                selectedItem={genero2}
                                setSelectedItem={setGenero2}
                />

                <Button onPress={methods.handleSubmit(handleRegisterUser)}
                >Registrar</Button>
            </FormProvider>
        </VStack>
    );
}

export default RegisterForm;