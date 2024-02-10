import 'react-native-gesture-handler';
import {NativeBaseProvider, View} from "native-base";
import {StatusBar} from "react-native";
import IndexRoutes from "./routes/index.routes";
import {ContextProvider} from "./context/GlobalContext";

export default function App() {
  return (
  <NativeBaseProvider>
    <StatusBar barStyle={"light-content"} ></StatusBar>

    <ContextProvider>
      <View backgroundColor={"gray.900"}  height={"full"}>
        <IndexRoutes/>
      </View>
    </ContextProvider>
  </NativeBaseProvider>
  )
}