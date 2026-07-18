import { createContext, useState } from "react";
import { PublicUser } from "../../types/User";


export interface UserContextType {
    user: PublicUser | null;
    setUser: (user: PublicUser | null) => void;
}

export const UserContext = createContext<UserContextType | null>(null);