import passport from "passport"
import nc from "next-connect"
const LocalStrategy = require("passport-local").Strategy


passport.serializeUser(function(user,done) {
	user = {username:"fucker{}"}
	done(null,user)
})

passport.deserializeUser(function(req,id,done){
	const user = {username:"fudee",id:12}
	done(null,user)
})


passport.use(new LocalStrategy(function(username,password,done){
	done(null,{username:"test",id:12})
}))

const auth = nc().use(passport.initialize())




export {auth,passport}