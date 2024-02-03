import {useTheme, View} from "native-base";
import {ImageBackground, ImageSourcePropType} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

interface BackgroundGradientImageProps {
    imgSource: ImageSourcePropType,
}

function BackgroundGradientImage({imgSource}: BackgroundGradientImageProps) {
    const theme = useTheme();

    return (
        <View position={"absolute"} h={'400px'} w={"full"}>
            <ImageBackground
                source={imgSource}
                alt={'imagem de fundo'}

                style={{
                    height: "100%",
                    width: "100%"
                }}
            >

                <LinearGradient
                    style={{
                        width:  '100%',
                        height: '100%'
                    }}

                    colors={['rgba(0,0,0,0)', theme.colors['gray']['900']]}
                />
            </ImageBackground>
        </View>
    );
}

export default BackgroundGradientImage;