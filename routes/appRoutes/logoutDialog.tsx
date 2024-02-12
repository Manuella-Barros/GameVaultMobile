import {AlertDialog, Button, Center} from "native-base";
import {useContext, useRef} from "react";
import {ACTION_TYPES, GlobalContext} from "../../context/GlobalContext";

interface ILogoutDialogProps {
    isOpen: boolean,
    setOnClose: () => void
}

export function LogoutDialog({isOpen, setOnClose}: ILogoutDialogProps){
    const cancelRef = useRef(null);
    const {handleSetUserToken, handleDispatch} = useContext(GlobalContext);

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
                                    onPress={() => {
                                        handleSetUserToken(null);
                                        handleDispatch({
                                            type: ACTION_TYPES.LOGOUT
                                        })
                                    }}
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