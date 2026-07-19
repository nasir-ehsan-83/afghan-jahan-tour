import z from "zod";

export const createUserSchema = z.object({
    name: z.string().nullable().optional(),
    username: z.string().min(3, "Username length should not be less than 3 characters"),
    email: z.string().email("Email Format is not Valid").min(7, "Email's length should not be less than 7 characters"),
    password: z.string().min(8, "Password's length should not be less than 8 characters"),
});

export const getUserParamsSchema = z.object({
    id: z.coerce.number()
});