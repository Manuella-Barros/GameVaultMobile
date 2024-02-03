import Login from "./screens/login/Login";
import {NativeBaseProvider, View} from "native-base";
import {StatusBar} from "react-native";
import Register from "./screens/register/Register";
import {NavigationContainer} from "@react-navigation/native";
import AuthRoutes from "./routes/authRoutes";
import IndexRoutes from "./routes/index.routes";
import Home from "./screens/home/Home";

export default function App() {
  return (
  <NativeBaseProvider>
    <StatusBar barStyle={"light-content"} ></StatusBar>

      <View backgroundColor={"gray.900"}  height={"full"}>
        <IndexRoutes/>
      </View>
  </NativeBaseProvider>
  )
}