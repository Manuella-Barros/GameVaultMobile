import {z} from "zod";

export const loginSchema = z.object({
    email:
        z.string({required_error: "Campo obrigatório"})
            .email({message: "Email inválido"}),
    password:
        z.string({required_error: "Campo obrigatório"})
})

export type TLoginSchema = z.infer<typeof loginSchema>;