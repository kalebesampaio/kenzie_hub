import * as z from "zod";

export const schemaLogin = z.object({
  email: z.string().nonempty("Email é obrigatório"),
  password: z.string().nonempty("Senha é obrigatória"),
});

export const schemaRegister = z
  .object({
    name: z.string().nonempty("Nome é obrigatório"),
    contact: z.string().url("Deve ser uma url"),
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
      .regex(new RegExp(".*[a-z].*"), "One lowercase character")
      .regex(new RegExp(".*\\d.*"), "One number")
      .regex(
        new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
        "One special character"
      )
      .min(8, { message: "Deve ter pelo menos 8 caracteres" }),
    confirm_password: z
      .string()
      .nonempty("Confirmar senha é obrigatório")
      .min(8, { message: "Deve ter pelo menos 8 caracteres" }),
    email: z.string().email(),
    bio: z.string().nonempty("A bio é obrigatória"),
    course_module: z.string().optional(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "As senhas devem ser iguais",
    path: ["confirm_password"],
  });
