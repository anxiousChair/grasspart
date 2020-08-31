const {Client} = require("pg")
//t
const pgConfig = {
	host:process.env.PG_HOST,
	database: process.env.PG_DATABASE,
	port:process.env.PG_PORT,
	user:process.env.PG_USER,
	password:process.env.PG_PASSWORD
}

const db = new Client(pgConfig)


const pg_agent = {
	query: async (text, values = []) => {
		let data
		try{
			return await db.query(text,values)
		}catch(err){
			console.log(err.detail)
		}
	},
	connect: async ()=>{
		try{
			await db.connect()
			return true
		}catch(err){
			console.log(err)
			return false
		}
	},
	debug: () => console.log(db)
	

}

module.exports = pg_agent