import React, {createContext,useContext, useState} from"react"
import axios from "axios"

const AuthContext = createContext();

function AuthProvider(props){
	const list = [{username:"admin",password:"admin123",token:"verifiedadmin"},{username:"koko69",password:"ameame123",token:"verifieduser"}]
	const [user, setUser] = useState(null)
	const [token, setToken] = useState(null)
	
	const login = async (username,password) => {
		for (let user of list){
			if(user.username === username){
				if(user.password === password){
					setUser(user.username)
					setToken(user.token)
					return null
				}
			}
			
		}
	}
	
	return (
		<AuthContext.Provider value={{isAuth: !!user, user, login, list}}>
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

