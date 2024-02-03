import Input, {TInputName} from "../../components/input/Input";
import {HStack, Image, Pressable, VStack, Text, useTheme, View, FlatList, FormControl,} from "native-base";
import Button from "../../components/button/Button";
import gameBackground from "../../assets/images/gameBackground-1.jpg"
import BackgroundGradientImage from "../../components/backgroundGradientImage/BackgroundGradientImage";
import {useNavigation} from "@react-navigation/native";
import {TAuthRoutesProps} from "../../routes/authRoutes";
import { z } from "zod";
import {FieldValues, FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useEffect} from "react";

const inputInfo = [
    {
        label: "Email",
        placeholder: "exemplo@gmail.com",
        name: "email",
    },
    {
        label: "Senha",
        placeholder: "******",
        name: "senha",
    },
]

const loginSchema = z.object({
    email: z.string().email(),
    senha: z.string(),
})

export type TLoginSchema = z.infer<typeof loginSchema>;

function Login() {
    const {navigate} = useNavigation<TAuthRoutesProps>();
    const methods = useForm<TLoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            senha: ''
        }
    });

    function handleLoginUser(data: TLoginSchema){
        console.log(data)
    }

    return (
        <VStack
            flex={1}
            justifyContent={"space-between"}
            backgroundColor={"gray.900"}
        >

            <BackgroundGradientImage imgSource={gameBackground}/>

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
                            />
                        }}
                    />

                    <Button onPress={methods.handleSubmit(handleLoginUser)}
                    >Entrar</Button>
                </FormProvider>

            </VStack>

            <VStack my={10} mx={10}>
                <Text
                    color={"white"}
                    textAlign={"center"}
                >Não possui uma conta?</Text>

                <Button
                    styleType={"variant"}
                    onPress={() => navigate("register")}
                >Junte-se</Button>
            </VStack>
        </VStack>
    );
}

export default Login;