import React, {useEffect} from 'react';
import {FlatList, Text, VStack} from "native-base";
import BackgroundGradientImage from "../../components/backgroundGradientImage/BackgroundGradientImage";
import gameBackground from "../../assets/images/gameBackground-2.jpg";
import Input, {TInputName} from "../../components/input/Input";
import Button from "../../components/button/Button";
import {useNavigation} from "@react-navigation/native";
import {TAuthRoutesProps} from "../../routes/authRoutes";
import {z} from "zod";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {TLoginSchema} from "../login/Login";

const inputInfo = [
    {
        label: "Email",
        placeholder: "exemplo@gmail.com",
        name: "email"
    },
    {
        label: "Senha",
        placeholder: "******",
        name: "senha"
    },
    {
        label: "Confirme sua senha",
        placeholder: "******",
        name: "confirmacaoSenha"
    },
]

const registerSchema = z.object({
    email: z.string().email(),
    senha: z.string().min(3).max(18),
    confirmacaoSenha: z.string().min(3).max(18),
})

type TRegisterSchema = z.infer<typeof registerSchema>;

function Register() {
    const {navigate} = useNavigation<TAuthRoutesProps>();
    const methods = useForm<TRegisterSchema>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: '',
            senha: '',
            confirmacaoSenha: '',
        }
    })

    function handleRegisterUser(data: TLoginSchema){
        console.log(data)
    }

    return (
        <VStack
            flex={1}
            justifyContent={"space-between"}
            backgroundColor={"gray.900"}
        >

            <BackgroundGradientImage imgSource={gameBackground}/>

            <VStack mx={10} mt={10}>
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
                            />
                        }}
                    />
                </FormProvider>

                <Button onPress={methods.handleSubmit(handleRegisterUser)}
                >Registrar</Button>
            </VStack>

            <VStack my={10} mx={10}>
                <Text
                    color={"white"}
                    textAlign={"center"}
                >Já possui uma conta?</Text>

                <Button
                    styleType={"variant"}
                    onPress={() => navigate("login")}
                >Entrar</Button>
            </VStack>
        </VStack>
    );
}

export default Register;