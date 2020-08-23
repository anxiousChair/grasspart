import React, {createContext,useContext, useState} from"react"
import axios from "axios"

const AuthContext = createContext();

function AuthProvider(props){
	const list = [{username:"admin",password:"admin123",token:"verifiedadmin"},{username:"koko69",password:"ameame123",token:"verifieduser"}]
	const [user, setUser] = useState(null)
	
	const login = () => {}
	
	
	return (
		<AuthContext.Provider value={{isAuthenticated: !!user, user, login, list}}>
			{props.children}
		</AuthContext.Provider>
	)

}

const AuthConsumer = AuthContext.Consumer

export function useAuth(){
	const context = useContext(AuthContext)
	return context
}

export {AuthProvider, AuthConsumer}

