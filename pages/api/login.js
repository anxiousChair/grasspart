import nc from "next-connect"
import {passport, authenticate} from "../../lib/passport.js"
import {Strategy} from "passport-local"
import {configSession} from "../../lib/ironSession.js"


const handler = nc()

handler.use(passport.initialize()).use(configSession).post( async (req,res) => {
	try{
		const data = await authenticate("local",req,res)
		console.log(data)
		req.session.set("user",{user: data.user,id:500})
		await req.session.save()
		console.log(req.session.get("user"))
		res.statusCode = 302
		res.setHeader("Location","/api/login")
		res.end()
	}
	catch(err){
		console.log(err)
		res.end()
	}
}).get(async(req,res) => {
	console.log("fuck")
	console.log(req.session.get("user"))
	res.end()
})

export default handler