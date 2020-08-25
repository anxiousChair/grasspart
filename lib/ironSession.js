import {ironSession} from "next-iron-session"

export const configSession = {
	cookieName:"secret",
	password:process.env.SECRET,
	cookieOptions:{
		secure: process.env.NODE_ENV === "production"
	}
}