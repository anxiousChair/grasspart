const {Client} = require("pg")

const pgConfig = {
	host:"localhost",
	database:"mydb",
	port:5432,
	user:"u0_a635",
	password:"admin"
}

const db = new Client(pgConfig)

db.connect()

const pg_agent = {
	query: (text, values = false) => {
			if(!values)
				return db.query(text)
		}

}

module.exports = pg_agent