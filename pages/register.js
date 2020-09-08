import Link from "next/link"

import {useRouter} from "next/router"
const axios = require("axios")

function Register(){
	const router = useRouter()
	
	const handleForm = function(){
		
	}
	
	return (
		<div className="w-full max-w-xs mx-auto mt-16">
			<form className="border shadow-md rounded px-8 py-8">
				<div className="mb-8">
					<label className="tracking-wide font-bold text-xs text-gray-700 block mb-1 uppercase">First Name<small className="ml-2 text-gray-600">(optional)</small></label>
					<input className="tracking-wide bg-gray-200 text-gray-700 w-full border border-gray-300 rounded px-4 py-2" placeholder="First Name"/>
				</div>
				<div className="mb-8">
					<label className="tracking-wide font-bold text-xs text-gray-700 block mb-1 uppercase">Last Name<small className="ml-2 text-gray-600">(optional)</small></label>
					<input type="text" className="tracking-wide bg-gray-200 text-gray-700 w-full border border-gray-300 rounded px-3 py-2" placeholder="Last Name"/>
				</div>
				
				<div className="mb-8">
					<label className="tracking-wide font-bold text-xs text-gray-700 block mb-1 uppercase">Username</label>
					<input type="text" className="tracking-wide bg-gray-200 text-gray-700 w-full border border-gray-300 rounded px-3 py-2" placeholder="Username"/>
				</div>
				<div className="mb-8">
					<label className="tracking-wide font-bold text-xs text-gray-700 block mb-1 uppercase">Password</label>
					<input type="text" className="tracking-wide bg-gray-200 text-gray-700 w-full border border-gray-300 rounded px-3 py-2" placeholder="Password"/>
				</div>
				<div className="mb-8">
					<label className="tracking-wide font-bold text-xs text-gray-700 block mb-1 uppercase">Confirm password.</label>
					<input type="text" className="tracking-wide bg-gray-200 text-gray-700 w-full border border-gray-300 rounded px-3 py-2" placeholder="Confirm password"/>
				</div>
				<div className="mb-6">
					<button type="button" className="px-2 py-1 w-full bg-gray-700 rounded text-gray-200 tracking-wide hover:bg-gray-500 hover:text-gray-700">Register</button>
				</div>
				<p className="text-center text-gray-800 text-xs">or</p>
				<Link href="/login"><a className="mt-2  text-center text-xs text-gray-800 block underline ">Already have an account? Login.</a></Link>
				
			</form>
		</div>
	)
}

export default Register