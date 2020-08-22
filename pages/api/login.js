import {auth, passport} from "../../lib/passport.js"
import nc from "next-connect"
 
const handler = nc()

handler.use(auth)
.post(passport.authenticate("local"),(req,res) =>{
	console.log("inside handler")
	console.log(req.user)
	res.write("testing")
	res.end()
})

export default handler