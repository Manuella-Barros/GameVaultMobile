import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Text, useToast, VStack} from "native-base";
import {FormProvider, useForm} from "react-hook-form";
import Input, {TInputName} from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import {zodResolver} from "@hookform/resolvers/zod";
import {InterfaceInputProps} from "native-base/lib/typescript/components/primitives/Input/types";
import {loginSchema, TLoginSchema} from "../../../../@types/user/login/types";
import {inputInfo} from "./arrays";
import {loginUser} from "../../../../api/POST/loginUser";
import {ACTION_TYPES, GlobalContext} from "../../../../context/globalContext/GlobalContext";
import {useAsyncStorage} from "@react-native-async-storage/async-storage"
import {getUserByID} from "../../../../api/GET/getUserByID";

function LoginForm() {
    const methods = useForm<TLoginSchema>({
        resolver: zodResolver(loginSchema),
    });
    const {handleSetUserToken, handleDispatch} = useContext(GlobalContext);
    const [isInfoLoading, setIsInfoLoading] = useState<boolean>(false)
    const toast = useToast();

    function handleLoginUser(data: TLoginSchema){
        setIsInfoLoading(true)

        loginUser(data)
            .then(res => {
                toast.show({title: "Logado com sucesso", placement: "top", backgroundColor: "green.500"})

                handleSetUserToken(res.access_token);

                useAsyncStorage("userToken").setItem(res.access_token)
                useAsyncStorage("userId").setItem(res.userID)

                return res.userID
            })
            .then((id) => {
                getUserByID(id).then(res => {
                    handleDispatch({
                        type: ACTION_TYPES.ADD_USER_INFO,
                        payload: {...res}
                    })
                })
            })
            .catch(e => methods.setError("password", { message: e.message }) )
            .finally(() => setIsInfoLoading(false))
    }

    return (
        <VStack mx={10} mt={"40%"}>
            <Text
                color={"white"}
                fontSize={"2xl"}
                textAlign={"center"}
            >Login</Text>

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

                <Button onPress={methods.handleSubmit(handleLoginUser)}
                        isLoading={isInfoLoading}
                >Entrar</Button>
            </FormProvider>

        </VStack>
    );
}

export default LoginForm;