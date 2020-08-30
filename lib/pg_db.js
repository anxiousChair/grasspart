const {Client} = require("pg")

const pgConfig = {
	host:"localhost",
	database:"mydb",
	port:5432,
	user:"u0_a635",
	password:"admin"
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