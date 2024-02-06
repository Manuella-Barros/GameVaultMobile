import {VStack, Text} from "native-base";
import Button from "../../components/button/Button";
import gameBackground from "../../assets/images/gameBackground-1.jpg"
import BackgroundGradientImage from "../../components/backgroundGradientImage/BackgroundGradientImage";
import {useNavigation} from "@react-navigation/native";
import {TAuthRoutesProps} from "../../routes/authRoutes/authRoutes";
import LoginForm from "./components/form/LoginForm";

function Login() {
    const {navigate} = useNavigation<TAuthRoutesProps>();

    return (
        <VStack
            flex={1}
            justifyContent={"space-between"}
            backgroundColor={"gray.900"}
        >

            <BackgroundGradientImage imgSource={gameBackground}/>

            <LoginForm/>

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