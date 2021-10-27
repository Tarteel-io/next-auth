import { NextApiRequest } from "next";
import { CommonProviderOptions } from ".";
import { User, Awaitable } from "..";
export interface CredentialInput {
    label?: string;
    type?: string;
    value?: string;
    placeholder?: string;
}
export interface CredentialsConfig<C extends Record<string, CredentialInput> = {}> extends CommonProviderOptions {
    type: "credentials";
    credentials: C;
    authorize: (credentials: Record<keyof C, string>, req: NextApiRequest) => Awaitable<(Omit<User, "id"> | {
        id?: string;
    }) | null>;
}
export declare type CredentialsProvider = <C extends Record<string, CredentialInput>>(options: Partial<CredentialsConfig<C>>) => CredentialsConfig<C>;
export declare type CredentialsProviderType = "Credentials";
declare type UserCredentialsConfig<C extends Record<string, CredentialInput>> = Partial<Omit<CredentialsConfig<C>, "options">> & Pick<CredentialsConfig<C>, "authorize" | "credentials">;
export default function Credentials<C extends Record<string, CredentialInput> = Record<string, CredentialInput>>(options: UserCredentialsConfig<C>): CredentialsConfig<C>;
export {};