import Link from "next/link"
import {useRouter} from "next/router"
import {useForm} from "react-hook-form"
import Head from "next/head"
import {useState} from "react"

import $ from "jquery"

const axios = require("axios")


function Register(){
	const {register, handleSubmit, errors, setError,reset} = useForm({mode:"onChange",shouldFocusError:false})
	const router = useRouter()
	const [flashmsg, setFlashmsg] = useState(null)
	const [userExist, setUserExist] = useState(false)
	
	const onSubmit = async function(data){
		let classes = "shadow-lg p-2 text-white rounded text-sm mb-5"
		let button = $("#buttonReg")
		button.html("Loading...")
		
		try{
			const res = await axios.post("/api/register", data)
			const bgcolor = res.data.code>0 && res.data.code ? "bg-green-500":"bg-red-500"
			setFlashmsg(<p className={bgcolor+" "+classes}>{res.data.text}</p>)
			setTimeout(()=>router.push("/login"),2000)
		}catch(err){
			setFlashmsg(<p className="shadow-lg p-2 bg-red-500 text-white rounded text-sm mb-5">Error: Something unusual happened. Notify dev.</p>)
		}finally{
			button.html("Register")
		}
		
		
	}
	
	const isExist = async(e)=>{
		let res = await axios.post("/api/corporeality",{username:e.target.value})
		if(res.data){
			setError("username",{
				type:"userexist",
				message:"Username already exist."
			})
			setUserExist(true)
			return null
		}
		setUserExist(false)
		
	}
	
	const confirmPass = (value)=> value == $("#password").val()
	
	//slap'em error boxes
	const doError = (data)=> <p className="border border-red-400 text-gray-600 text-sm rounded p-2 mt-2">{data}</p>
	
	return (

		<div className="w-full max-w-xs mx-auto mt-16">
			<form className="border shadow-md rounded px-8 py-8" onSubmit={handleSubmit(onSubmit)} id="form">
				{flashmsg}
				<div className="mb-8">
					<label className="tracking-wide font-bold text-xs text-color-2 block mb-1 uppercase">Username</label>
					<input type="text" id="username" name="username" ref={register({required:true,maxLength:40,minLength:5})} onBlur={isExist} className="tracking-wide text-gray-600 w-full border-b border-color-2 px-4 py-2" placeholder="Username"/>
					{errors.username && errors.username.type == "userexist" && doError(errors.username.message) || errors.username && doError("Username must have at least 5 characters")}
				</div>
				<div className="mb-8">
					<label className="tracking-wide font-bold text-xs text-color-2 block mb-1 uppercase">Password</label>
					<input id="password" type="password" name="password" ref={register({required:true,minLength:8})} className="tracking-wide text-gray-600 w-full border-b border-color-2 px-4 py-2" placeholder="Password"/>
					{errors.password && doError("Password must have at least 8 characters.")}
				</div>
				<div className="mb-8">
					<label className="tracking-wide font-bold text-xs text-color-2 block mb-1 uppercase">Confirm password.</label>
					<input type="password" name="confirmPassword" ref={register({required:true,validate:confirmPass})} className="tracking-wide text-gray-600 w-full border-b border-color-2 px-4 py-2" placeholder="Confirm password"/>
					{errors.confirmPassword && doError("Password doesn't match.")}
				</div>
				<div className="mb-8">
					<button type="submit" id="buttonReg" className="disabled px-2 py-1 w-full bg-color-2 rounded text-color-1 tracking-wide">Register</button>
				</div>
				<p className="text-center text-gray-600 text-xs">or</p>
				<Link href="/login"><a className="mt-2  text-center text-xs text-color-2 block underline ">Already have an account? Login.</a></Link>
				
			</form>
		</div>
		
	)
}

export default Register