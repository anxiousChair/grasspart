import {Container, Form, Button} from "react-bootstrap"



 function Login(props){
	
	return (
		<Container>
			<Form >
  				<Form.Group controlId="formUsername">
    					<Form.Label>Username <small>soon to be email</small> </Form.Label>
    					<Form.Control type="text" placeholder="Enter username" name="username" />
  				</Form.Group>

  				<Form.Group controlId="formPassword">
    					<Form.Label>Password</Form.Label>
    					<Form.Control type="password" placeholder="Password" name="password" />
  				</Form.Group>
  				
  				
  				<Button  variant="primary">Submit</Button>
			</Form>
			<p>you can use these credentials for now (database is yet to be implemented)</p>
			<p> ( still working on a much secure session handling) </p>
		</Container>
	)
}



export default Login