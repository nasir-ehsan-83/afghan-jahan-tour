import type {
    Request,
    Response,
    NextFunction
} from "express";
import { ZodType } from "zod";

export const validateResponse = <T>(schema: ZodType<T>) => {

    return (req: Request, res: Response, next: NextFunction) => {

        const originalJson = res.json;

        res.json = function (body: any): Response {

            const isSuccessStatus = res.statusCode >= 200 && res.statusCode < 300;

            if (isSuccessStatus) {
                const result = schema.safeParse(body);

                if (!result.success) {

                    res.statusCode = 500;
                    return originalJson.call(this, {
                        statusCode: 500,
                        message: "Response validation failed",
                        error: result.error
                    });
                }

                return originalJson.call(this, result.data);
            }

            return originalJson.call(this, body);
        };

        next();
    };
};
