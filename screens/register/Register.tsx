import React from 'react';
import {Text, VStack} from "native-base";
import BackgroundGradientImage from "../../components/backgroundGradientImage/BackgroundGradientImage";
import gameBackground from "../../assets/images/gameBackground-2.jpg";
import Button from "../../components/button/Button";
import {useNavigation} from "@react-navigation/native";
import {TAuthRoutesProps} from "../../routes/authRoutes";
import RegisterForm from "./components/form/RegisterForm";

function Register() {
    const {navigate} = useNavigation<TAuthRoutesProps>();

    return (
        <VStack
            flex={1}
            justifyContent={"space-between"}
            backgroundColor={"gray.900"}
        >

            <BackgroundGradientImage imgSource={gameBackground}/>

            <RegisterForm/>

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