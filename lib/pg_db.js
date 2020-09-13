const {Client} = require("pg")
//db 
let db

const pgFallBack = {
	host:process.env.PG_HOST,
	database: process.env.PG_DATABASE,
	port:process.env.PG_PORT,
	user:process.env.PG_USER,
	password:process.env.PG_PASSWORD
}

const fb = {
	host:"localhost",
	database:"mydb",
	port:5432,
	user:"u0_a635",
	password:"admin"
}



async function fetchConnectionString(){
	const axios = require("axios")
	try{
		let res = await axios.get("https://api.heroku.com/apps/liaisnapp/config-vars",{headers:{
			Authorization: 'Bearer ' + process.env.HEROKU_KEY,
			Accept: "application/vnd.heroku+json; version=3"
		}})
		db = new Client({
			connectionString: res.data.DATABASE_URL,
			ssl:{
				rejectUnauthorized: false
			}
		})
		
		console.log("returningjjjjbbdf")
	}catch(err){
		console.log("fetchConnectionString err, switching to failsafe db")
		db = new Client(fb)
	}
}

//db.on("end", (res)=> console.log("disconnected db"))


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
			if(db === undefined || db == null){
				console.log("fetching")
				await fetchConnectionString()
				db.on("end", (res)=> console.log("disconnected db"))
				db.on("error",(err)=> console.log(err))
			}
			if(db._connected == true){
				console.log("db already conn")
				return true
			}
			await db.connect()
			return true
		}catch(err){
			console.log("bad connect",err)
			db = null
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