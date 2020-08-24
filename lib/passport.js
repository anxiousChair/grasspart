import passport from "passport"
import nc from "next-connect"
const LocalStrategy = require("passport-local").Strategy


passport.use(new LocalStrategy(function(username,password,done){
	done(null,{username:"test",id:12345})
}))




export {passport}