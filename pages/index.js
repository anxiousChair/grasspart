import {useAuth} from "../context/Auth"
import {Container, Form, Button} from "react-bootstrap"

export default function Home(props){
	const {user, login} = useAuth()
	
	const handleForm = (e) => {
		const username = document.getElementById("username").value
		const password = document.getElementById("password").value
		login(username,password)
	}
	

	return (
		<Container>
		{!user && <h1>You are guest</h1>}
			<Form>
  				<Form.Group controlId="formUsername">
    					<Form.Label>Username <small>soon to be email</small> </Form.Label>
    					<Form.Control type="text" placeholder="Enter username" id="username"/>
  				</Form.Group>

  				<Form.Group controlId="formPassword">
    					<Form.Label>Password</Form.Label>
    					<Form.Control type="password" placeholder="Password" id="password"/>
  				</Form.Group>
  				
  				
  				<Button onClick={handleForm} variant="primary" type="input">Submit</Button>
			</Form>
		</Container>
	)
}