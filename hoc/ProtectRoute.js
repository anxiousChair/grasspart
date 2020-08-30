import {useAuth} from "../context/Auth"
import {configSession} from"../lib/ironSession.js"
import {withIronSession} from "next-iron-session"



function withProtect(guest=false,redirectIfAuth=false,redirectIfNotAuth="/login"){
	return withIronSession(({req,res})=>{
		let session = req.session.get("apparel")
		if(!session) session = {id:null}
		const {id} = session
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
		return {props:{id:session.id}}


	},
	configSession)
		
}


function ProtectRoute(Component){
	return (props) => {
		const {user,authorize} = useAuth()
		authorize(props.id)
		if(props.id)
			return (<Component {...props}/>)
		else return <p>oopsie</p>
	}
}

export {withProtect,ProtectRoute}