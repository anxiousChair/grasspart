const User = require("../../models/User.js")



export default async function(req,res){
	if(req.method != "POST"){
		res.write("-1")
		res.end()
		return
	}
	const body = !!req.body.username
	let success = false, result = false, code = "-1"
	if(body){
		const connected = await User.connect()
		if(connected){
			result = await User.userExist(req.body.username)
			await User.disconnect()
			code = result ? "1":"0"
		}
	}
	res.write(code)
	res.end()
}

