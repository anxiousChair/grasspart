import nc from "next-connect"
import {withIronSession} from "next-iron-session"
import {configSession} from "../../lib/ironSession.js"

const User = require("../../models/User")


async function handler(req,res,session){
	let time = new Date()
	console.log(JSON.stringify({
		method:req.method,
		rem_addr: req.headers["x-real-ip"] + "--" + req.headers["x-forwarded-for"] + "--" + req.socket.remoteAddress,
		host: req.headers["host"],
		url: req.url,
		agent: req.headers["user-agent"],
		referer: req.headers["referer"],
		origin: req.headers["origin"],
		time: time.toString()
	}))
	
	let response = {text:"Something terrible happened. :( huhu",code:-1}
	
	let success = false
	let connected = false
	let body = !!req.body.username && !!req.body.password
	let result = null
	
	connected = await User.connect()
	
	if(body && connected){
		result = await User.verifyUser(req.body)
		if(result){
			req.session.set("apparel",{id:req.body.username})
			await req.session.save()
			success = true
			response.code = 1
		}else response.code = 0
		await User.disconnect()
	}
	
	res.write(JSON.stringify(response))
	res.end()
}

export default withIronSession(handler,configSession)
