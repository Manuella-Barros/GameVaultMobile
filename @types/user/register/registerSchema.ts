import {z} from "zod";

export const registerSchema = z.object({
    name: z.string({required_error: "Campo obrigatório"}),
    email:
        z.string({required_error: "Campo obrigatório"})
        .email({message: "Email inválido"}),
    password:
        z.string({required_error: "Campo obrigatório"})
        .min(3, {message: "Mínimo 3 caracteres"})
        .max(18, {message: "Máximo 18 caracteres"}),
    passwordConfirmation:
        z.string({required_error: "Campo obrigatório"})
        .min(3, {message: "Mínimo 3 caracteres"})
        .max(18, {message: "Máximo 18 caracteres"}),
    favGenre1:
        z.string({required_error: "Campo obrigatório", invalid_type_error: "Campo obrigatório"}),
    favGenre2:
        z.string({required_error: "Campo obrigatório", invalid_type_error: "Campo obrigatório"}),
    favGame:
        z.string({required_error: "Campo obrigatório"})
})
.refine(fields => fields.password == fields.passwordConfirmation, {
    message: "As senhas devem ser iguais",
    path: ["passwordConfirmation"],
})
.refine(fields => fields.favGenre1 != fields.favGenre2, {
    message: "Os gêneros devem ser diferentes",
    path: ["genre2"]
})

export type TRegisterSchema = z.infer<typeof registerSchema>;