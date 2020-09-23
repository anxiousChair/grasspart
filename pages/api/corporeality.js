const User = require("../../models/User.js")

export default async function(req,res){
	const body = !!req.body.username
	let success = false, result = false
	if(body){
		const connected = await User.connect()
		if(connected){
			result = await User.userExist(req.body.username)
			User.disconnect()
		}
	}
	res.write(result? "1":"0")
	res.end()
}

