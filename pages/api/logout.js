import {configSession} from "../../lib/ironSession.js"
import {withIronSession} from "next-iron-session"

function handler(req,res){
	req.session.destroy()
	res.end()
}

export default withIronSession(handler,configSession)