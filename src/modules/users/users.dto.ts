import z from "zod";
import type { createUserSchema } from "./users.validator.js";

export interface ExistUser {
    username: string;
    email: string;
}

export type CreateUser = z.infer<typeof createUserSchema>