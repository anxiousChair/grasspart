import {withIronSession} from "next-iron-session"
import {configSession} from "../../lib/ironSession"

const Item = require("../../models/Item")

async function handler(req,res){
	let success, connected
	success = connected = false
	const body = !!req.body.name && !!req.body.image && !!req.body.desc 
	if(body){
		connected = await Item.connect()
		if(connected){
			//create product
			let res = await Item.create(body)
			success = res
		}
	}
	await Item.disconnect()
	res.write(success ? "1":"0")
	res.end()
}

export default withIronSession(handler,configSession)
