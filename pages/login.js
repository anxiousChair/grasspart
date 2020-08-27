import {useAuth} from "../context/Auth"
import {Container, Form, Button} from "react-bootstrap"
import {withProtect} from "../hoc/ProtectRoute"
import {useRef,useState} from "react"
import {useRouter} from "next/router"



 function Login(props){
	const {user} = useAuth()
	const usernameRef = useRef(null)
	const passwordRef = useRef(null)
	const axios = require("axios")
	const [test,setTest] = useState(null)
	const  router = useRouter()


	let credentials = []

	const handleForm = function(){
		axios.post('/api/login', {
			username: usernameRef.current.value,
			password: passwordRef.current.value
		  }).then(()=>router.push("/dashboard")).catch((err) => alert("catch" +err.response.status))
	}
	

	return (
		<Container>
		{!props.id && <h1>You are guest</h1> || <h1>You are {props.id	}</h1>}
			<Form >
  				<Form.Group controlId="formUsername">
    					<Form.Label>Username <small>soon to be email</small> </Form.Label>
    					<Form.Control type="text" placeholder="Enter username" name="username" ref={usernameRef}/>
  				</Form.Group>

  				<Form.Group controlId="formPassword">
    					<Form.Label>Password</Form.Label>
    					<Form.Control type="password" placeholder="Password" name="password" ref={passwordRef}/>
  				</Form.Group>
  				
  				
  				<Button onClick={handleForm} variant="primary">Submit</Button>
			</Form>
			<p>you can use these credentials for now (database is yet to be implemented)</p>
			{credentials}
			<p> ( still working on a much secure session handling) </p>
		</Container>
	)
}

export const getServerSideProps = withProtect(true,"/dashboard")

export default Login