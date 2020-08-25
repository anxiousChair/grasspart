import passport from "passport"
import nc from "next-connect"
const LocalStrategy = require("passport-local").Strategy


const localstrat = new LocalStrategy(function(username,password,done){
	done(null,{user:"dude"})
})

const authenticate = (method, req, res) =>  {
  return new Promise((resolve, reject) => {
    passport.authenticate(method, {}, (error, token) => {
      if (error) {
        reject(error)
      } else {
        resolve(token)
      }
    })(req, res)
  })
}

passport.use(localstrat)
	
export {passport, authenticate}