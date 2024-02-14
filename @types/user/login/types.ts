import {z} from "zod";
import {IUser} from "../IUser";
import {IUserEntity} from "../IUserEntity";
import {IToken} from "../../auth/IToken";

export const loginSchema = z.object({
    email:
        z.string({required_error: "Campo obrigatório"})
            .email({message: "Email inválido"}),
    password:
        z.string({required_error: "Campo obrigatório"})
})

export type TLoginSchema = z.infer<typeof loginSchema>;

