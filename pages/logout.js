import {withIronSession} from "next-iron-session"
import {configSession} from "../lib/ironSession.js"

export default function logout(){
	return null
}


export const getServerSideProps = withIronSession(
	async({req,res})=>{
		req.session.destroy()
		res.statusCode = 302
		res.setHeader("Location","/login")
		return {props:{}}
	},configSession)