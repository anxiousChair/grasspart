import nc from "next-connect"
import {withIronSession} from "next-iron-session"
import {configSession} from "../../lib/ironSession.js"



async function handler(req,res,session){
	let success = false
	const User = require("../../models/User.js")
	if(await User.connect() === 500){
			res.write("db bad")
			res.end()
	}
	const result = await User.verifyUser(req.body)
	console.log(result)
	if(result){
		console.log("executed")
		req.session.set("apparel",{id:req.body.username})
		await req.session.save()
		success = true
	}
	
	res.statusCode = success ? 200:406
	res.end()
}

export default withIronSession(handler,configSession)