import nc from "next-connect"
import {withIronSession} from "next-iron-session"
import {configSession} from "../../lib/ironSession.js"

const list = [{
	username:"admin",password:"admin123"
},
{
	username:"admintest",password:"goody"
}]


async function handler(req,res,session){
	let success = false
	console.log("loginapi")
	console.log(req.session.get("session_id"))
	for(let i of list)
	{
		if(JSON.stringify(i) === JSON.stringify(req.body))
		{
			req.session.set("session_id",{id:i.username})
			await req.session.save()
			console.log(req.session.get("session_id"))
			success = true
			console.log("success")
			break
		}
	}
	res.statusCode = success ? 200:406
	res.end()
}

export default withIronSession(handler,{
	cookieName:"secret",
	password:process.env.SECRET,
	cookieOptions:{
		secure: false

	}
})