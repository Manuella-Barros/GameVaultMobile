import React, {} from 'react';
import {Button as NativeButton, Text, IButtonProps} from "native-base";
// rsrsrsrsr rsos infinitos
interface IButton extends IButtonProps{
    children: string,
    styleType?: "variant" | "default",
}

function Button({children, styleType="default", ...props}: IButton) {
    return (
        <NativeButton
            {...props}
            mt={4}
            backgroundColor={styleType == "default" ? "white" : "muted.600"}
            borderRadius={8}
            p={3}
            _pressed={{
                backgroundColor: styleType == "default" ? "muted.600" : "white",
                color: styleType == "default" ? "white" : "black"
            }}
        >
            <Text
                textAlign={"center"}
                color={styleType == "default" ? "black" : "white"}
            >{children}</Text>
        </NativeButton>
    );
}

export default Button;