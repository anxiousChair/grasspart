import {useAuth} from "../context/Auth"
import {withProtect} from "../hoc/ProtectRoute"
import {useRef,useState} from "react"
import {useRouter} from "next/router"
import Link from "next/link"


 function Login(props){
	const usernameRef = useRef(null)
	const passwordRef = useRef(null)
	const axios = require("axios")
	const router = useRouter()

	const handleForm = function(){
		axios.post('/api/login', {
			username: usernameRef.current.value,
			password: passwordRef.current.value
		  }).then(()=>router.push("/browse")).catch((err) => alert("catch" +err))
	}
	

	return (
		<div className="w-full max-w-xs mx-auto mt-16">
			<form className="border shadow-md rounded px-8 py-8">
				<div className="mb-6">
					<label className="tracking-wide font-bold text-xs text-gray-700 block mb-1 uppercase">Username</label>
					<input className="tracking-wide bg-gray-200 text-gray-700 w-full border border-gray-300 rounded px-3 py-2" placeholder="Username"/>
				</div>
				<div className="mb-6">
					<label className="tracking-wide font-bold text-xs text-gray-700 block mb-1 uppercase">Password</label>
					<input type="password" className="tracking-wide bg-gray-200 text-gray-700 w-full border border-gray-300 rounded px-3 py-2" placeholder="Password"/>
				</div>
				<div className="mb-6">
					<button type="button" className="px-2 py-1 w-full bg-gray-700 rounded text-gray-200 tracking-wide hover:bg-gray-500 hover:text-gray-700">Login</button>
				</div>
				<a className="mb-4 text-center text-xs underline text-gray-800 block">Forgot password?</a>
				<p className="text-center text-gray-800 text-xs">or</p>
				<Link href="/register"><a className="mt-2  text-center text-xs text-gray-800 block underline ">Create an account.</a></Link>
				
			</form>
		</div>
	)
}


export default Login