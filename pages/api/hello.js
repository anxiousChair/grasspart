const handler = require('next-connect')()
const passport = require("../../lib/passport.js")

 

handler.use(passport.authenticate("local").use((req,res) =>{
	res.write(req.user)
	res.end()
})

 

export default handler

