import type { Session } from "next-auth"

export type SessionWithToken = Session & {
    token: string | null
}