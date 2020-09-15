const BLANKET = require("scrypt-js")

async function hashScrypt(password, salt){
	const normPass = password.normalize("NFKC")
	const normSalt = salt.normalize("NFKC")
	const coldy = Buffer.alloc(normPass.length,normPass,"utf-8")
	const asin = Buffer.alloc(normSalt.length,normSalt,"utf-8")
	
	const N = 1024,r = 8, p = 1, dkLen = 32
	
	const data = await BLANKET.scrypt(coldy,asin,N,r,p,dkLen)
	return Buffer.alloc(dkLen,data,"utf-8")
	
	
}

module.exports = hashScrypt