import nc from "next-connect"
import {withIronSession} from "next-iron-session"
import {configSession} from "../../lib/ironSession.js"

const User = require("../../models/User")

async function handler(req,res,session){
	console.log(req.socket.remoteAddress,req.headers["x-real-ip"],req.headers["x-forwarded-for"])
	let time = new Date()
	console.log(JSON.stringify({
		method:req.method,
		rem_addr: req.connection.remoteAddress,
		host: req.headers["host"],
		url: req.url,
		agent: req.headers["user-agent"],
		referer: req.headers["referer"],
		origin: req.headers["origin"],
		time: time.toString()
	}))
	
	let success = false
	let connected = false
	let body = !!req.body.username && !!req.body.password
	
	
	connected = await User.connect()
	console.log(connected,body)
	
	if(body && connected){
		const result = await User.verifyUser(req.body)
		if(result){
			req.session.set("apparel",{id:req.body.username})
			await req.session.save()
			success = true
		}
	}
	res.statusCode = success ? 200:406
	res.end()
}

export default withIronSession(handler,configSession)
