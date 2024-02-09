import React from 'react';
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

function LoginForm() {
    const methods = useForm<TLoginSchema>({
        resolver: zodResolver(loginSchema),
    });
    const navigation = useNavigation<TAppRoutesProps>();

    function handleLoginUser(data: TLoginSchema){
        loginUser(data).then(res => {
            console.log(res)
            // navigation.navigate("home")
        })
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
                >Entrar</Button>
            </FormProvider>

        </VStack>
    );
}

export default LoginForm;