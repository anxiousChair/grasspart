import {useAuth} from "../context/Auth"
import {Container, Form, Button} from "react-bootstrap"
import ProtectRoute from "../hoc/ProtectRoute"

 function Login(){
	const {user,list} = useAuth()
	


	let credentials = []

	for (let item of list){
		credentials.push(<p><b>username</b>: {item.username}  <b>password</b>: {item.password}</p>)
	}
	

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
  				
  				
  				<Button  variant="primary">Submit</Button>
			</Form>
			<p>you can use these credentials for now (database is yet to be implemented)</p>
			{credentials}
			<p> ( still working on a much secure session handling) </p>
		</Container>
	)
}

export const getServerSideProps = ProtectRoute(true,"/dashboard")

export default Login