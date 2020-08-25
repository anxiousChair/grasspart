import {useAuth} from "../context/Auth"

import {withIronSession} from "next-iron-session"


function withProtect(guest=false,redirectIfAuth=false,redirectIfNotAuth="/login"){
	return withIronSession(({req,res})=>{

		
		console.log("protectroute")
		const {id} = req.session.get("session_id")
		return {props:{id}}


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