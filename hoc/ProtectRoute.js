import {useAuth} from "../context/Auth"

import {withIronSession} from "next-iron-session"


function withProtect(guest=false,redirectIfAuth=false,redirectIfNotAuth="/login"){
	return withIronSession(({req,res})=>{

		
		console.log("protectroute")
		let token = req.session.get("session_id")
		if(!token) token = {id:""}
		
		const {id} = token
		if(!id && !guest)
		{
			res.statusCode = 302
			res.setHeader("Location", redirectIfNotAuth)
		}
		if(id && redirectIfAuth)
		{
			res.statusCode = 302
			res.setHeader("Location",redirectIfAuth)
		}

		return {props:{id:token.id}}


	},
	{
	cookieName:"secret",
	password:process.env.SECRET,
	cookieOptions:{
		secure:false
	}
	})
		
	
}

export {withProtect}