import React, {useContext, useState} from 'react';
import {FlatList, Text, VStack} from "native-base";
import {FormProvider, useForm} from "react-hook-form";
import Input, {TInputName} from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import {zodResolver} from "@hookform/resolvers/zod";
import {InterfaceInputProps} from "native-base/lib/typescript/components/primitives/Input/types";
import {loginSchema, TLoginSchema} from "../../../../@types/user/login/types";
import {inputInfo} from "./arrays";
import {loginUser} from "../../../../api/loginUser";
import {useNavigation} from "@react-navigation/native";
import {TAppRoutesProps} from "../../../../routes/appRoutes/appRoutes";
import {ACTION_TYPES, GlobalContext} from "../../../../context/GlobalContext";

function LoginForm() {
    const methods = useForm<TLoginSchema>({
        resolver: zodResolver(loginSchema),
    });
    const {handleSetUserToken, handleDispatch} = useContext(GlobalContext);
    const [isInfoLoading, setIsInfoLoading] = useState<boolean>(false)

    function handleLoginUser(data: TLoginSchema){
        setIsInfoLoading(true)

        loginUser(data).then(res => {
            const {access_token, ...userInfo} = res;

            handleSetUserToken(access_token);
            console.log({...{...userInfo}})

            handleDispatch({
                type: ACTION_TYPES.ADD_USER_INFO,
                payload: {...userInfo}
            })

            // navigate.navigate("Home", {name, favGenre1, favGenre2})
        }).finally(() => setIsInfoLoading(false))
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