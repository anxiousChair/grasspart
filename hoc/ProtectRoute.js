import {useAuth} from "../context/Auth"
import {useRouter} from "next/router"
import {useEffect} from "react"
import {passport} from "../lib/passport.js"
import nc from "next-connect"


export default function withProtect(guest=false,redirectIfAuth=false,redirectIfNotAuth="/login"){
	return async function({req,res})
	{
		const handler = nc().use(passport.initialize())
		try{
			
			await handler.apply(req,res);
		}
		catch(e){
			
		}
		console.log(req.url)

		return {props:{}}
	}
	
}