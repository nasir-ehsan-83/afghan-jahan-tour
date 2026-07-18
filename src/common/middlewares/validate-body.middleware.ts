import type {
    Request,
    Response,
    NextFunction
} from "express";
import type { ZodType } from "zod";

export const validateBody = <T>(schema: ZodType<T>) => {
    return (req: Request<any, any, T, any>, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                statusCode: 400,
                message: "Validation failed",
                error: result.error
            });
        }

        req.body = result.data;
        next();
    }
}