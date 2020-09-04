import {useAuth} from "../context/Auth"
import {withProtect} from "../hoc/ProtectRoute"
import {useRef,useState} from "react"
import {useRouter} from "next/router"



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
		<div className="container mx-auto">
			<div className="w-2/3 mx-auto p-5 rounded mt-12">
				<form className="flex flex-col flex-grow">
					<input type="text" placeholder="Username" className="mb-8 border-b border-gray-800"/>
					<input type="password" placeholder="Password"/>
					<button type="button" className="px-1 w-1/4  border border-gray-800 rounded mt-3 text-sm mx-auto">Login</button>
					<p className="mx-auto">or</p>
					<a className="underline text-sm mx-auto">Forgot password?</a>
				</form>
			</div>
		</div>
	)
}


export default Login