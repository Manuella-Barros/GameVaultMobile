import 'react-native-gesture-handler';
import {NativeBaseProvider, View} from "native-base";
import {StatusBar} from "react-native";
import IndexRoutes from "./routes/index.routes";
import {ContextProvider} from "./context/GlobalContext";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function App() {
  return (
  <NativeBaseProvider>
    <StatusBar barStyle={"light-content"} ></StatusBar>

    <ContextProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View backgroundColor={"gray.900"} height={"full"}>
          <IndexRoutes/>
        </View>
      </GestureHandlerRootView>
    </ContextProvider>
  </NativeBaseProvider>
  )
}