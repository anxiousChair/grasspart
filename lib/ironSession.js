import {ironSession} from "next-iron-session"

export const configSession = ironSession({
	cookieName:"timestamp",
	password:process.env.SECRET
})