import { prisma } from "../../config/prisma.js";
import type {
    CreateUser,
    ExistUser
} from "./users.type.js";

export class UsersService {

    getUser = async (id: number) => {
        return ;
    }

    createUser = async (createUser: CreateUser) => {
        return await prisma.user.create({
            data: {
                ...createUser,
                name: createUser.name ?? null
            }
        });
    };

    userExist = async (existUser: ExistUser) => {
        return await prisma.user.findFirst({
           where: {
            OR: [
                {username: existUser.username},
                {email: existUser.email}
            ]
           }
        });
    }
}