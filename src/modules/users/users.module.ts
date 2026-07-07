import { Router } from "express";
import { validateBody } from "../../common/middlewares/validate-body.middleware.js";
import { createUserSchema } from "./users.validator.js";
import { UsersService } from "./users.service.js";
import { UsersController } from "./users.controller.js";

const usersController = new UsersController(new UsersService());

const usersRouter = Router();

usersRouter.post(
    "/", 
    validateBody(createUserSchema), 
    usersController.createUser
);
usersRouter.get(
    "/:id", 
    usersController.getUser
);

export const UsersModule = usersRouter;