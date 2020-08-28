import {withIronSession} from "next-iron-session"
import {configSession} from "../../lib/ironSession.js"

function handler(req,res){
	if(req.method === "POST"){
		console.log(req.session.get("session_id"))
	}
	res.end()
}

export default withIronSession(handler,configSession)