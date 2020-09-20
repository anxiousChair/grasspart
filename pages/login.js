import {useAuth} from "../context/Auth"
import {withProtect} from "../hoc/ProtectRoute"
import {useState} from "react"
import {useRouter} from "next/router"
import Link from "next/link"
import {useForm} from "react-hook-form"

import $ from "jquery"


 function Login(props){
	const borders = ["border-b border-color-2", "border border-red-500"]
	//react hook form
	const {register, handleSubmit, errors} = useForm()
	const axios = require("axios")
	const router = useRouter()
	

	const sendCred = function(data){
		axios.post('/api/authenticate',data).then(()=>router.push("/browse")).catch((err) => alert("bad creds perhaps hahaha"))
	}
	
	return (
		<div className="w-full max-w-xs mx-auto mt-16">
			<form className="border shadow-md rounded px-8 py-8" onSubmit={handleSubmit(sendCred)}>
				<div className="mb-8">
					<label className="tracking-wide font-bold text-xs text-color-2 block mb-1 uppercase">Username</label>
					<input name="username" ref={register} id="username" className="outline-none text-gray-600 tracking-wide w-full border-b border-color-2 px-4 py-2" placeholder="Username"/>
				</div>
				<div className="mb-8">
					<label className="tracking-wide font-bold text-xs text-color-2 block mb-1 uppercase">Password</label>
					<input name="password" ref={register} id="password" type="password" className="text-gray-600 tracking-wide w-full border-b border-color-2  px-4 py-2" placeholder="Password"/>
				</div>
				<div className="mb-8">
					<button type="submit" className="px-2 py-1 w-full bg-color-2 rounded text-color-1 tracking-wide hover:bg-gray-500 hover:text-gray-700">Login</button>
				</div>
				<a className="mb-4 text-center text-xs underline text-color-2 block">Forgot password?</a>
				<p className="text-center text-gray-600 text-xs">or</p>
				<Link href="/register"><a className="mt-2  text-center text-xs text-color-2 block underline ">Create an account.</a></Link>
				
			</form>
		</div>
	)
}


export default Login