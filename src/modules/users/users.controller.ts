import type { 
    Request, 
    Response 
} from 'express';
import { UsersService } from "./users.service.js";
import { hashPassword } from '../../core/security.js';
import { asyncHandler } from '../../common/utils/async.handler.js';
import type { CreateUser } from './users.type.js';

export class UsersController {
    
    // usersService is UsersService's instance to use its methods
    constructor( private usersService: UsersService ){ }

    // Post("/")
    createUser = asyncHandler(async (req: Request, res: Response) => {
        // get username and email fields
        const { username, email } = req.body;
        
        // if user already exists
        if (await this.usersService.userExist({ username, email })) {
            return res.status(201).json({
                status: "error",
                message: "User already exist"
            });
        }

        req.body.password = await hashPassword(req.body.password);
        // get user's details from req.body
        const userData: CreateUser = req.body;

        // create new user
        const newUser =  await this.usersService.createUser(userData);

        return res.status(200).json({
            message: "User created successfully ",
            newUser
        });
    });

    // Get("/:id")
    getUser = async (req: Request, res: Response) => {
        const id = req.params.id;
        const user =  this.usersService.getUser(+id!);

        if (!user) {
            return res.status(404).json({
                status: "error",
                message: "User not found"
            });
        }

        return res.status(200).json({
            message: "User found",
            user
        });
    };

}