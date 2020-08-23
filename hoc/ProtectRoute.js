import {useAuth} from "../context/Auth"
import {useRouter} from "next/router"
import {useEffect} from "react"

export default function ProtectRoute(Component, guest = false, redirectTo = false){
	return () => {
		
		const {isAuthenticated} = useAuth()
		const router = useRouter()
		console.log(process.env)
		
		useEffect(() => {
			if(!guest && !isAuthenticated) router.push("/login")
			if(isAuthenticated && redirectTo) router.push(redirectTo)
		},[isAuthenticated])
	
		if(!isAuthenticated && !guest){
			return null
		}
		return <Component {...arguments} />
	}
}