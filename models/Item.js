const agent = require("../lib/pg_db.js")

const Item = {
	create: async(item) => {
		const values = [item.owner_id,item.name,item.image,item.price,item.desc,item.stocks]
		const res = await agent.query("INSERT INTO items(item_owner_id,item_name,item_image,item_price,item_desc,item_stocks) VALUES($1,$2,$3,$4,$5,$6)",values)
		return (res && res.rowCount) ? true:false
	},
	
	fetchAll: async() => {
		const res = await agent.query("SELECT user_username,item_name,item_price,item_image FROM items,users WHERE users.user_id = items.item_owner_id")
		return (res && res.rowCount) ? res.rows:false
	},
	connect: async()=>{
		const res = await agent.connect()
		return res
	},
	disconnect: async()=>{
		const res = await agent.disconnect()
	}
}

module.exports = Item