const BLANKET = require("scrypt-js")
const CRYPTO = require("crypto-js")
const random = require("crypto-random-string")

async function hashScrypt(password, salt){
	const normPass = password.normalize("NFKC")
	const normSalt = salt.normalize("NFKC")
	const coldy = Buffer.alloc(normPass.length,normPass,"utf-8")
	const asin = Buffer.alloc(normSalt.length,normSalt,"utf-8")
	
	const N = 1024,r = 8, p = 1, dkLen = 32
	
	const data = await BLANKET.scrypt(coldy,asin,N,r,p,dkLen)
	return Buffer.alloc(dkLen,data,"utf-8")
	
	
}

function generateToken(unique_string){
	const hash = CRYPTO.SHA256(unique_string + Date.now() + random({length:16}))
	return hash.toString(CRYPTO.enc.hex)
}


module.exports = {hashScrypt,generateToken}