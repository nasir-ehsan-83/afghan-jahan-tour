import type {
    Request,
    Response,
    NextFunction
} from "express";
import { ZodType } from "zod";

export const validateParams = <T extends Record<string, any>>(schema: ZodType<T>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.params);

        if (!result.success) {
            return res.status(400).json({
                statusCode: 400,
                message: "Validation failed",
                error: result.error
            });
        }

        req.params = result.data as any;
        next();
    }
};