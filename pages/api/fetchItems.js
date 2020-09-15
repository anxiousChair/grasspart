const Item = require("../../models/Item")

export default async function(req,res){
	const connected = await Item.connect()
	let data
	if(connected){
		data = await Item.fetchAll()
		if(data) res.write(JSON.stringify(data))
		await Item.disconnect()
	}
	res.statusCode = data ? 200:406
	console.log(res.statusCode)
	res.end()
}