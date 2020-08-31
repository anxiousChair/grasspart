const {Client} = require("pg")
//t
const pgConfig = {
	host:process.env.PG_HOST,
	database: process.env.PG_DATABASE,
	port:process.env.PG_PORT,
	user:process.env.PG_USER,
	password:process.env.PG_PASSWORD
}

const test = {
	connectionString:"postgres://httmdsvhruyvlo:dfd72c2c481820bb2a180fa6cb21d30bd17e78b60251a5e7c568d884b57f1028@ec2-34-192-173-173.compute-1.amazonaws.com:5432/d6ke26p10691cn",
	ssl:true
}

const db = new Client(test)


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