import bcrypt  from "bcryptjs"
import { asyncHandler } from "../common/utils/async.handler.js";

export const hashPassword = asyncHandler(async (password: string): Promise<string> => {
    // hash password
    return await bcrypt.hash(password, 10);
});

export const verifyPassword = asyncHandler(async (password: string, hashedPassword: string): Promise<boolean> => {
    // compare password with its hashedPassword
    return bcrypt.compare(password, hashedPassword);
});