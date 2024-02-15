import {AlertDialog, Button, Center} from "native-base";
import {useContext, useRef} from "react";
import {ACTION_TYPES, GlobalContext} from "../../context/globalContext/GlobalContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";
import {TAuthRoutesProps} from "../authRoutes/authRoutes";

interface ILogoutDialogProps {
    isOpen: boolean,
    setOnClose: () => void
}

export function LogoutDialog({isOpen, setOnClose}: ILogoutDialogProps){
    const cancelRef = useRef(null);
    const {handleDispatch, storageUserID, handleSetUserToken} = useContext(GlobalContext);

    async function handleLogoutUser(){
        handleDispatch({
            type: ACTION_TYPES.LOGOUT
        });
        storageUserID(null)
        handleSetUserToken(null)
    }

    return (
        <Center>
            <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={setOnClose}>
                <AlertDialog.Content>
                    <AlertDialog.CloseButton />
                    <AlertDialog.Header>Sair</AlertDialog.Header>
                    <AlertDialog.Body>
                        Deseja sair da conta?
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                        <Button.Group space={2}>
                            <Button colorScheme="danger"
                                    onPress={handleLogoutUser}
                            >
                                Sim
                            </Button>
                            <Button colorScheme="coolGray" onPress={setOnClose} ref={cancelRef}>
                                Não
                            </Button>
                        </Button.Group>
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>
        </Center>
    );
};