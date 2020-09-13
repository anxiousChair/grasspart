import {withIronSession} from "next-iron-session"
import {configSession} from "../../lib/ironSession"

const User = require("../../models/User")

async function handler(req,res){
	let success = false
	let connected = false
	let body = !!req.body.username && !!req.body.password
	connected = await User.connect()
	if(body && connected){
		let res = await User.create(req.body)
		if(res){
			success = true
		}
	}
	res.statusCode = success ? 200:406
	res.end()
}

export default withIronSession(handler,configSession)