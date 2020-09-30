const agent = require("../lib/pg_db.js")
const {hashScrypt, generateToken} = require("../lib/crypto")
const crypto = require("crypto-js")


const User = {
	create: async(data)=>{
		const coldy = await hashScrypt(data.password,data.username + data.username)
		const values = [data.username,coldy.toString("hex"),data.email]
		const res = await agent.query("INSERT INTO users(user_username,user_password,user_email,user_token) VALUES($1,$2,$3,NULL)",values)
		console.log(res.code)
		return (res && res.rowCount) ? true: res
		
	},
	userExist: async(user) => {
		const res = await agent.query("SELECT user_id FROM users WHERE user_username = $1",[user])
		return (res &&res.rowCount) ? true:false
	},
	emailExist: async (email) => {
		const res = await agent.query("SELECT user_id FROM users WHERE user_email = $1",[email])
		return (res && res.rowCount) ? true:false
	},
	attachToken: async (user,token) => {
		const res = await agent.query("UPDATE users  SET user_token = $2 WHERE user_username = $1",[user,token])
		return res.rowCount ? true:false
	},
	verifySession: async (session) => {
		const res = await agent.query("SELECT user_token FROM users WHERE user_username = $1",[session.user])
		const [data] = res.rows
		return (session.token == data.user_token) ? true:false
	},
	verifyUser: async(credentials) => {
		const values = [credentials.username]
		const res = await agent.query("SELECT user_username,user_password FROM users WHERE user_username = $1",values)
		if(!res || !res.rowCount) return false
		const [data] = res.rows
		const coldy = await hashScrypt(credentials.password,credentials.username + credentials.username)
		
		return (data.user_password === coldy.toString("hex")) ? true:false
	},
	fetchID: async(username)=>{
		const res = await agent.query("SELECT user_id FROM users WHERE user_username = $1",[username])
		return (res && res.rowCount) ? res.rows[0]:false
	},
	generateToken: async(user_id)=>{
		
	},
	connect: async () =>{
		let res = await agent.connect()
		return res
	},
	disconnect: async () => {
		let res = await agent.disconnect()
		return res
	}
}

module.exports = User