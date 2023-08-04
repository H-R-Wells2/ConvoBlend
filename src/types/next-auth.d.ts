import type { Session, User } from "next-auth";
import type { jwt } from "next-auth/jwt";

type UserId = string;

declare module "next-auth/jwt"{
    interface jwt{
        id:UserId;
        username?:string | null;
    }
}

declare module "next-auth"{
    interface jwt{
        id:UserId;
        username?:string | null;
    }
}