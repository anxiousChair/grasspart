import nc from "next-connect"
import {withIronSession} from "next-iron-session"
import {configSession} from ""

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
	console.log(req.body)
	for(let i of list)
	{
		if(JSON.stringify(i) === JSON.stringify(req.body))
		{
			req.session.set("session_id",{id:i.username})
			await req.session.save()
			console.log(req.session.get("session_id"))
			console.log("success")
			break
		}
	}
	if(success){
		res.statusCode = 302
		res.setHeader("Location","/dashboard")
	}
	res.end()
}

export default withIronSession(handler,{
	cookieName:"secret",
	password:process.env.SECRET,
	cookieOptions:{
		secure: false

	}
})