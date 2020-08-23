import passport from "passport"
import nc from "next-connect"
const LocalStrategy = require("passport-local").Strategy


passport.serializeUser(function(user,done) {
	user = 12345
	done(null,user)
})

passport.deserializeUser(function(req,id,done){
	const user = {username:"test",id:12345}
	done(null,user)
})


passport.use(new LocalStrategy(function(username,password,done){
	done(null,{username:"test",id:12345})
}))




export {passport}