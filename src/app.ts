import express from "express";
import type {Request, Response} from "express";
import cors from "cors";

import { UsersModule } from "./users/users.module.js";

const app = express();

app.use(express.json());

app.use(cors({
    origin: [
        "http://localhost:3000",
        "http://localhost:5173", 
        "http://127.0.0.1:3000",
        "http://127.0.0.1:5173"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use("/api/users", UsersModule);

app.use((req: Request, res: Response) => {
    res.status(404).json({
        error: "Route not found"
    });
});

export default app;