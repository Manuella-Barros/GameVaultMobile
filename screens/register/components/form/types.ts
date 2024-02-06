import {z} from "zod";

export const registerSchema = z.object({
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
    genre1:
        z.coerce.number({required_error: "Campo obrigatório", invalid_type_error: "Campo obrigatório"}),
    genre2:
        z.coerce.number({required_error: "Campo obrigatório", invalid_type_error: "Campo obrigatório"}),
    favGame:
        z.string({required_error: "Campo obrigatório"})
        // z.coerce.number({required_error: "Campo obrigatório", invalid_type_error: "Campo obrigatório"}),
})
.refine(fields => fields.password == fields.passwordConfirmation, {
    message: "As senhas devem ser iguais",
    path: ["passwordConfirmation"],
})
.refine(fields => fields.genre1 != fields.genre2, {
    message: "Os gêneros devem ser diferentes",
    path: ["genre2"]
})

export type TRegisterSchema = z.infer<typeof registerSchema>;

export interface IGenres {
    id: number,
    name: string,
};

