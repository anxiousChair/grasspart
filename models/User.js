const agent = require("../lib/pg_db.js")
const blanket = require("crypto-js")

agent.connect()

const User = {
	create: async(data)=>{
		const coldy = blanket.SHA256(data.username + data.password).toString(blanket.enc.Base64)
		const values = [data.username,coldy,data.email]
		const res = await agent.query("INSERT INTO users(user_username,user_password,user_email,user_token) VALUES($1,$2,$3,NULL)",values)
		return res.rowCount ? true: false
		
	},
	findUser: async(user) => {
		const res = query("SELECT user_id FROM users WHERE user_username = $1",[user])
		return res.rowCount ? true:false
	},
	findEmail: async (email) => {
		const res = await agent.query("SELECT user_id FROM users WHERE user_email = $1",[email])
		return res.rowCount
	},
	attachToken: async (user,token) => {
		const res = await agent.query("UPDATE users  SET user_token = $2 WHERE user_username = $1",[user,token])
		return res.rowCount ? true:false
	},
	verifySession: async (session) => {
		console.log("entered")
		const res = await agent.query("SELECT user_token FROM users WHERE user_username = $1",[session.user])
		const [data] = res.rows
		return (session.token != data.user_token) ? false:true
	},
	verifyUser: async(credentials) => {
		const values = [credentials.username]
		const res = await agent.query("SELECT user_username,user_password FROM users WHERE user_username = $1",values)
		if(!res.rowCount) return false
		const [data] = res.rows
		const coldy = blanket.SHA256(credentials.username + credentials.password).toString(blanket.enc.Base64)
		if(data.user_password === coldy) return true
		return false
	}
}

module.exports = User