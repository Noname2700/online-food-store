export interface User {
    id: string;
    name: string;
    email: string;
    hashedPassword: string;
    createdAt: Date;
}

export interface UserSignUpInput {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface UserLoginInput {
    email: string;
    password: string;
}