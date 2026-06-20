import { createContext, useState } from "react";
import { PublicUser } from "../../types/user";


export interface UserContextType {
    user: PublicUser | null;
    setUser: (user: PublicUser | null) => void;
}

export const UserContext = createContext<UserContextType | null>(null);