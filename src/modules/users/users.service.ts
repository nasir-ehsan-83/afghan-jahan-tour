// users.service.ts
import { prisma } from "../../config/prisma.js";
import type { CreateUser, ExistUser } from "./users.type.js";

export class UsersService {

    getUser = async (id: number) => {
        return await prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                username: true,
                email: true,
                name: true,
                createdAt: true,
                updatedAt: true
            }
        });
    }

    createUser = async (createUser: CreateUser) => {
        return await prisma.user.create({
            data: {
                ...createUser,
                name: createUser.name ?? null
            },
            select: {
                id: true,
                username: true,
                email: true,
                name: true,
                createdAt: true,
                updatedAt: true
            }
        });
    };

    userExist = async (existUser: ExistUser): Promise<boolean> => {
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    { username: existUser.username },
                    { email: existUser.email }
                ]
            },
            select: { id: true }
        });

        return !!user;
    }
}