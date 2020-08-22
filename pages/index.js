import {useAuth} from "../context/Auth"
import {Container, Form, Button} from "react-bootstrap"

export default function Home(props){
	const {user, login,list} = useAuth()
	
	const handleForm = (e) => {
		const username = document.getElementById("formUsername").value
		const password = document.getElementById("formPassword").value
		login(username,password)
	}

	let credentials = []

	for (let item of list){
	credentials.push(<p><b>username</b>: {item.username}  <b>password</b>: {item.password}</p>)
	}
	
	console.log(list)

	return (
		<Container>
		{!user && <h1>You are guest</h1> || <h1>You are {user}</h1>}
			<Form>
  				<Form.Group controlId="formUsername">
    					<Form.Label>Username <small>soon to be email</small> </Form.Label>
    					<Form.Control type="text" placeholder="Enter username"/>
  				</Form.Group>

  				<Form.Group controlId="formPassword">
    					<Form.Label>Password</Form.Label>
    					<Form.Control type="password" placeholder="Password"/>
  				</Form.Group>
  				
  				
  				<Button onClick={handleForm} variant="primary">Submit</Button>
			</Form>
			<p>you can use these credentials for now (database is yet to be implemented)</p>
			{credentials}
			<p> ( still working on a much secure session handling) </p>
		</Container>
	)
}