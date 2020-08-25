import {useAuth} from "../context/Auth"
import {localstrat} from "../lib/passport.js"
import nc from "next-connect"
import {configSession} from "../lib/ironSession.js"
import {withIronSession} from "next-iron-session"


function withProtect(guest=false,redirectIfAuth=false,redirectIfNotAuth="/login"){
	return withIronSession(({req,res})=>{
		console.log(req.session.get("user"))
		return {props:{}}
	},{
	cookieName:"timestamp",
	password:process.env.SECRET
	})
		
	
}

export {withProtect}