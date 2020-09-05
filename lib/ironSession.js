import {ironSession} from "next-iron-session"

export const configSession = {
	cookieName:"secret",
	password:process.env.SECRET,
	cookieOptions:{
		ttl: 86400,
		secure: process.env.NODE_ENV === "production"
	}
}