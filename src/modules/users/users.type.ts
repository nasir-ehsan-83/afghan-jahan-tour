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

export type SafeUser = Omit<CreateUser, 'password'> & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
};