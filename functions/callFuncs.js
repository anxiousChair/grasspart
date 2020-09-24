import $ from "jquery"
async function callFuncs(element){
	if(!arguments) return
	let args = [...arguments]
	for(const i in args){
		alert(args[i])
		await args[i](element)
	}
	return
}

module.exports = callFuncs