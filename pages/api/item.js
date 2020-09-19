import {withIronSession} from "next-iron-session"
import {configSession} from "../../lib/ironSession"

const Item = require("../../models/Item")

async function handler(req,res){
	let success, connected, body
	success = connected = false
	body = !!req.body.itemName && !!req.body.itemImage && !!req.body.itemDesc
	if(body){
		connected = await Item.connect()
		if(connected){
			//create product
			success = true
		}
	}
	await Item.disconnect()
	res.statusCode = success ? 200:406
	res.end()
}

export default withIronSession(handler,configSession)
