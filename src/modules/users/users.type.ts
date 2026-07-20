export interface CreateUser {
    username: string;
    email: string;
    password: string;
    name?: string | null;
}

export interface ExistUser {
    username: string;
    email: string;
}

export type ResponseUser = Omit<CreateUser, 'password'> & {
    id: number;
    role: "ADMIN" | "USER";
    createdAt: Date;
    updatedAt?: Date;
};