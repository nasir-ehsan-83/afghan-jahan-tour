// users.controller.ts
import type { Request, Response } from 'express';
import { asyncHandler } from '../../common/utils/async.handler.js';
import { conflict, notFound } from '../../common/errors/index.js';
import { hashPassword } from '../../core/security.js';
import type { CreateUser } from './users.type.js';
import { UsersService } from "./users.service.js";

export class UsersController {

    constructor(private usersService: UsersService) { }

    createUser = asyncHandler(async (req: Request, res: Response) => {
        const { username, email, password, name } = req.body;

        if (await this.usersService.userExist({ username, email })) {
            throw conflict("User already exists");
        }

        const hashedPassword = await hashPassword(password);

        const userData: CreateUser = {
            username,
            email,
            password: hashedPassword,
            name: name || null
        };

        const newUser = await this.usersService.createUser(userData);

        return res.status(201).json({
            message: "User created successfully",
            user: newUser
        });
    });

    getUser = asyncHandler(async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            throw new Error('Invalid ID format');
        }

        const user = await this.usersService.getUser(id);

        if (!user) {
            throw notFound("User not found");
        }

        return res.status(200).json({
            message: "User found",
            user
        });
    });
}