import {ironSession} from "next-iron-session"

export const configSession = {
	cookieName:"secret",
	password:process.env.SECRET,
	cookieOptions:{
		maxAge: 86400,
		secure: process.env.NODE_ENV === "production"
	}
}