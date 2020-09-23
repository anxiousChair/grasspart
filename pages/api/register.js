import {withIronSession} from "next-iron-session"
import {configSession} from "../../lib/ironSession"

const User = require("../../models/User")

//need tweaking


async function handler(req,res){
	let success = false, connected = false
	let body = !!req.body.username && !!req.body.password
	
	let response = {text:"Unknown error. Send log to dev.",code:null}
	
	connected = await User.connect()
	
	if(body && connected){
		let res = await User.create(req.body)
		success = res!=23505 ? true:false
		
		response.text = success ? "Account created.":"Username already exist."
		response.code = success ? 1:0
		
		await User.disconnect()
	}else{
		response.text = "Something horrible happened. huhu"
		response.code = -1
	}
	res.statusCode = 200
	res.write(JSON.stringify(response))
	res.end()
}

export default withIronSession(handler,configSession)