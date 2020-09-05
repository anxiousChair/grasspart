import nc from "next-connect"
import {withIronSession} from "next-iron-session"
import {configSession} from "../../lib/ironSession.js"

const User = require("../../models/User")

async function handler(req,res,session){
	let success = false
	let connected = false
	let body = !!req.body.username && !!req.body.password
	
	
	connected = await User.connect()
	
	if(body && connected){
		console.log("inside scope")
		const result = await User.verifyUser(req.body)
		if(result){
			req.session.set("apparel",{id:req.body.username})
			await req.session.save()
			success = true
		}
	}
	res.setHeader("Connection","close")
	res.statusCode = success ? 200:406
	res.end()
}

export default withIronSession(handler,configSession)