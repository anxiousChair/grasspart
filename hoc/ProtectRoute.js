import {useAuth} from "../context/Auth"
import {configSession} from"../lib/ironSession.js"
import {withIronSession} from "next-iron-session"


function withProtect(guest=false,redirectIfAuth=false,redirectIfNotAuth="/login"){
	return withIronSession(({req,res})=>{

		console.log("Got calleeeeeeeeeeeeeee")
		console.log("withProtect")
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
	configSession)
		
}


function ProtectRoute(Component){
	return (props) => {
		const {user,authorize} = useAuth()
		authorize(props.id)
	
		return (
				<Component user={props.id} {...props}/>
		)
	}
}

export {withProtect,ProtectRoute}