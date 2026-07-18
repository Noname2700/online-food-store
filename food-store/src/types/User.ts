export interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
}

export interface PublicUser {
  id: string;
  name: string;
  email: string;
}

