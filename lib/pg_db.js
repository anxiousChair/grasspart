const {Client} = require("pg")
//t
const pgConfig = {
	host:process.env.PG_HOST,
	database: process.env.PG_DATABASE,
	port:process.env.PG_PORT,
	user:process.env.PG_USER,
	password:process.env.PG_PASSWORD
}
//fuckkkk
const test = {
	connectionString:"postgres://httmdsvhruyvlo:dfd72c2c481820bb2a180fa6cb21d30bd17e78b60251a5e7c568d884b57f1028@ec2-34-192-173-173.compute-1.amazonaws.com:5432/d6ke26p10691cn",
	ssl:{
		rejectUnauthorized:false
	}
}

const db = new Client(pgConfig)

db.on("end", (res)=> console.log("disconnected db"))


const pg_agent = {
	query: async (text, values = []) => {
		try{
			if(!db._connected) throw new Error("Client not connected'")
			let res = await db.query(text,values)
			console.log("queried")
			return res
		}catch(err){
			console.log(err)
			return false
		}
	},
	connect: async ()=>{
		try{
			if(db._connected || db._connecting){
				console.log("db already conn")
				return true
			}
			await db.connect()
			console.log("db connected")
			return true
		}catch(err){
			console.log(err)
			return false
		}
	},
	disconnect: async () => {
		try{
			let res = await db.end()
			console.log("db disconnected")
			return true
		}catch(err){
			console.log(err)
			return false
		}
	},
	debug: () => console.log(db)
	
	

}

module.exports = pg_agent